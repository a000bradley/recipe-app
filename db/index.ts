import "dotenv/config";
import { resolve } from "node:path";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./db";

(async () => {
  await migrate(db, { migrationsFolder: resolve(__dirname, "../migrations") });
})();
