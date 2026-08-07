import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { RecipeRepository } from "../src/repository/recipe-repository.js";
import { RecipeStore } from "../src/types.js";

describe("RecipeRepository seed", () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mine-mcp-recipe-seed-"));
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("copies seed recipes when the user store is missing", async () => {
    const seedFile = path.join(tempDir, "recipes.seed.json");
    const dataFile = path.join(tempDir, "user-data", "recipes.json");
    const seed: RecipeStore = {
      recipes: [
        {
          id: "seed-1",
          name: "SeedFarm",
          type: "farm",
          summary: "Seeded recipe",
          resources: ["1 bloco"],
          process: ["Construa."],
          tags: ["seed"],
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z"
        }
      ]
    };

    await fs.writeFile(seedFile, JSON.stringify(seed, null, 2), "utf-8");
    const repository = new RecipeRepository(dataFile, seedFile);

    const recipes = await repository.list();
    expect(recipes).toHaveLength(1);
    expect(recipes[0]?.name).toBe("SeedFarm");

    const persisted = JSON.parse(await fs.readFile(dataFile, "utf-8")) as RecipeStore;
    expect(persisted.recipes).toHaveLength(1);
  });

  it("keeps user edits and does not re-seed an existing store", async () => {
    const seedFile = path.join(tempDir, "recipes.seed.json");
    const dataFile = path.join(tempDir, "recipes.json");
    const seed: RecipeStore = {
      recipes: [
        {
          id: "seed-1",
          name: "SeedFarm",
          type: "farm",
          summary: "Seeded",
          resources: ["1"],
          process: ["1"],
          tags: [],
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z"
        }
      ]
    };
    const userStore: RecipeStore = {
      recipes: [
        {
          id: "user-1",
          name: "UserFarm",
          type: "farm",
          summary: "User edited",
          resources: ["2"],
          process: ["2"],
          tags: ["custom"],
          createdAt: "2026-02-01T00:00:00.000Z",
          updatedAt: "2026-02-01T00:00:00.000Z"
        }
      ]
    };

    await fs.writeFile(seedFile, JSON.stringify(seed, null, 2), "utf-8");
    await fs.writeFile(dataFile, JSON.stringify(userStore, null, 2), "utf-8");

    const repository = new RecipeRepository(dataFile, seedFile);
    const recipes = await repository.list();

    expect(recipes).toHaveLength(1);
    expect(recipes[0]?.name).toBe("UserFarm");
  });
});
