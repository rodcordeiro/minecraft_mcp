import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

/** Absolute path to the package root (directory that contains `package.json`). */
export const projectRoot = path.resolve(currentDir, "..");

export interface MineMcpPaths {
  projectRoot: string;
  dataDir: string;
  downloadsDir: string;
  dataFile: string;
  recipesFile: string;
  recipesSeedFile: string;
}

/**
 * Resolves runtime paths from env.
 * - `MINE_MCP_DATA_DIR`: directory for `points.json` / `recipes.json` (client-provided).
 * - `MINE_MCP_DOWNLOADS_DIR`: sandbox root for exaroton downloads.
 */
export function resolvePaths(
  env: NodeJS.ProcessEnv = process.env,
  root: string = projectRoot
): MineMcpPaths {
  const dataDir = path.resolve(env.MINE_MCP_DATA_DIR?.trim() || path.join(root, "data"));
  const downloadsDir = path.resolve(
    env.MINE_MCP_DOWNLOADS_DIR?.trim() || path.join(root, "downloads")
  );

  return {
    projectRoot: root,
    dataDir,
    downloadsDir,
    dataFile: path.join(dataDir, "points.json"),
    recipesFile: path.join(dataDir, "recipes.json"),
    recipesSeedFile: path.join(root, "data", "recipes.seed.json")
  };
}

export const paths = resolvePaths();
