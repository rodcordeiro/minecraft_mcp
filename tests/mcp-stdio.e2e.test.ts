import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("MCP stdio e2e", () => {
  it("lists tools over stdio transport", async () => {
    const transport = new StdioClientTransport({
      command: "node",
      args: ["--import", "tsx", path.join(root, "src", "index.ts")],
      cwd: root,
      env: {
        ...process.env,
        MINE_MCP_DATA_DIR: path.join(root, "data")
      },
      stderr: "pipe"
    });

    const client = new Client({ name: "mine-mcp-e2e", version: "0.0.1" });

    try {
      await client.connect(transport);
      const listed = await client.listTools();
      const names = listed.tools.map((tool) => tool.name);

      expect(names).toEqual(
        expect.arrayContaining([
          "register_point",
          "list_points",
          "list_recipes",
          "get_recipe",
          "exaroton_list_servers"
        ])
      );
    } finally {
      await client.close();
    }
  }, 30000);
});
