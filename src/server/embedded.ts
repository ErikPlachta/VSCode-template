/**
 * @fileoverview Embedded MCP server for VS Code extension use.
 * Starts the MCP server on a random available port for internal extension use.
 */

import { createServer, Server } from "http";
import { AddressInfo } from "net";
import { handleRequest } from "./index";
import { createMcpServer } from "./index";

let serverInstance: Server | null = null;
let serverPort: number | null = null;

/**
 * Start the embedded MCP server on an available port.
 * @returns {Promise<string>} Promise that resolves to the server URL
 */
export async function startMCPServer(port?: number): Promise<string> {
  if (serverInstance) {
    return `http://localhost:${serverPort}`;
  }

  return new Promise((resolve, reject) => {
    try {
      if (port) {
        serverInstance = createMcpServer(port);
        serverPort = port;
        resolve(`http://localhost:${serverPort}`);
        return;
      }

      serverInstance = createServer((req, res) => {
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

      serverInstance.listen(0, "localhost", () => {
        const address = serverInstance!.address() as AddressInfo;
        serverPort = address.port;
        console.log(`Embedded MCP server started on port ${serverPort}`);
        resolve(`http://localhost:${serverPort}`);
      });

      serverInstance.on("error", (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Stop the embedded MCP server.
 * @returns {Promise<void>} Promise that resolves when server is stopped
 */
export async function stopMCPServer(): Promise<void> {
  if (serverInstance) {
    return new Promise((resolve) => {
      serverInstance!.close(() => {
        serverInstance = null;
        serverPort = null;
        resolve();
      });
    });
  }
}
