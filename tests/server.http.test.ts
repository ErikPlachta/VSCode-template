import { describe, it, expect } from "@jest/globals";
import { startHttpServer } from "@server/index";
import http from "http";

describe("HTTP JSON-RPC transport (optional)", () => {
  it("handles initialize and tools/list via HTTP", async () => {
    const { server, port } = await startHttpServer(0);
    const post = (payload: any) =>
      new Promise<any>((resolve, reject) => {
        const req = http.request(
          {
            hostname: "127.0.0.1",
            port,
            path: "/",
            method: "POST",
            headers: { "content-type": "application/json" },
          },
          (res) => {
            const chunks: Buffer[] = [];
            res.on("data", (c) => chunks.push(Buffer.from(c)));
            res.on("end", () => {
              try {
                resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
              } catch (e) {
                reject(e);
              }
            });
          }
        );
        req.on("error", reject);
        req.end(Buffer.from(JSON.stringify(payload)));
      });

    const init = await post({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {},
    });
    expect(init.result).toBeTruthy();

    const list = await post({
      jsonrpc: "2.0",
      id: 2,
      method: "tools/list",
      params: {},
    });
    expect(Array.isArray(list.result?.tools)).toBe(true);

    await new Promise<void>((r) => server.close(() => r()));
  });
});
