import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { resolvePaths } from "../src/config.js";

describe("resolvePaths", () => {
  it("defaults data and downloads under the project root", () => {
    const root = path.join(os.tmpdir(), "mine-mcp-root");
    const resolved = resolvePaths({}, root);

    expect(resolved.dataDir).toBe(path.join(root, "data"));
    expect(resolved.downloadsDir).toBe(path.join(root, "downloads"));
    expect(resolved.dataFile).toBe(path.join(root, "data", "points.json"));
    expect(resolved.recipesFile).toBe(path.join(root, "data", "recipes.json"));
    expect(resolved.recipesSeedFile).toBe(path.join(root, "data", "recipes.seed.json"));
  });

  it("honors MINE_MCP_DATA_DIR and MINE_MCP_DOWNLOADS_DIR from the client", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mine-mcp-env-"));
    const dataDir = path.join(tempDir, "client-data");
    const downloadsDir = path.join(tempDir, "client-downloads");
    const root = path.join(tempDir, "pkg");

    const resolved = resolvePaths(
      {
        MINE_MCP_DATA_DIR: dataDir,
        MINE_MCP_DOWNLOADS_DIR: downloadsDir
      },
      root
    );

    expect(resolved.dataDir).toBe(path.resolve(dataDir));
    expect(resolved.downloadsDir).toBe(path.resolve(downloadsDir));
    expect(resolved.dataFile).toBe(path.join(path.resolve(dataDir), "points.json"));

    await fs.rm(tempDir, { recursive: true, force: true });
  });
});
