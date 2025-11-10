/**
 * @packageDocumentation Embedded MCP server for VS Code extension use.
 * Starts the MCP server on a random available port for internal extension use.
 */

import { createServer, Server } from "http";
import { AddressInfo } from "net";
import { handleRequest } from "@server/index";
import { createMcpServer } from "@server/index";

let serverInstance: Server | null = null;
let serverPort: number | null = null;

/**
 * Start the embedded MCP server on a provided or ephemeral port and resolve when it is ready.
 * - When a fixed port is provided, wait for the underlying server to emit `listening`.
 * - If the port is already in use, reject and clear any partial state so the caller can retry.
 * - When no port is provided, bind to an ephemeral port and resolve with the full URL once ready.
 *
 * @param {number} [port] - Preferred port to bind to. If omitted, an ephemeral port is chosen.
 * @returns {Promise<string>} Fully qualified base URL (e.g., http://localhost:39200).
 */
export async function startMCPServer(port?: number): Promise<string> {
  console.log(`🔧 startMCPServer called with port: ${port ?? "ephemeral"}`);
  if (serverInstance && serverPort) {
    console.log(`ℹ️ Server already running on port ${serverPort}`);
    return `http://localhost:${serverPort}`;
  }

  return new Promise((resolve, reject) => {
    try {
      if (port) {
        const srv = createMcpServer(port);
        serverInstance = srv;

        /**
         * Remove temporary event listeners used during startup.
         * Ensures we do not retain references after success or failure.
         */
        const cleanup = (): void => {
          srv.removeListener("error", onError);
          srv.removeListener("listening", onListening);
        };
        /**
         * Handle successful server bind; finalize port assignment and resolve.
         */
        const onListening = (): void => {
          cleanup();
          serverPort = port;
          console.log(`✅ Embedded MCP server listening on port ${port}`);
          resolve(`http://localhost:${serverPort}`);
        };
        /**
         * Handle bind errors (e.g., EADDRINUSE). Clears partial state so caller can retry.
         *
         * @param {Error} error - underlying server error.
         */
        const onError = (error: Error): void => {
          cleanup();
          console.error(
            `❌ Server failed to bind on port ${port}:`,
            error.message
          );
          // Clear partial state so the caller can retry on a different port
          serverInstance = null;
          serverPort = null;
          reject(error);
        };

        // If it already bound synchronously, resolve immediately; otherwise wait.
        if (srv.listening) {
          onListening();
        } else {
          srv.once("listening", onListening);
          srv.once("error", onError);
        }
        return;
      }

      const srv = createServer((req, res) => {
        // Delegate to the main server logic
        void handleRequest(req, res).catch((error) => {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              id: null,
              error: {
                code: -32603,
                message: "Internal error",
                data: (error as Error).message,
              },
            })
          );
        });
      });

      serverInstance = srv;

      /**
       * Handle successful ephemeral bind; capture assigned port and resolve.
       */
      const onListening = (): void => {
        const address = srv.address() as AddressInfo;
        serverPort = address.port;
        console.log(`Embedded MCP server started on port ${serverPort}`);
        resolve(`http://localhost:${serverPort}`);
      };
      /**
       * Handle ephemeral bind errors; reset state to allow retry.
       *
       * @param {Error} error - underlying server error.
       */
      const onError = (error: Error): void => {
        serverInstance = null;
        serverPort = null;
        reject(error);
      };

      srv.once("listening", onListening);
      srv.once("error", onError);
      srv.listen(0, "localhost");
    } catch (error) {
      // Clear state on unexpected exceptions
      serverInstance = null;
      serverPort = null;
      reject(error);
    }
  });
}

/**
 * Stop the embedded MCP server if it is running.
 *
 * @returns {Promise<void>} Resolves once the server is fully closed or immediately when not running.
 */
export async function stopMCPServer(): Promise<void> {
  if (!serverInstance) return;
  await new Promise<void>((resolve) => {
    serverInstance!.close(() => {
      serverInstance = null;
      serverPort = null;
      resolve();
    });
  });
}
