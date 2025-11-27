import { Pool } from "pg";
import type { Project } from "@/constants/projects";

declare global {
  var pgPool: Pool | undefined;
}

export const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (!global.pgPool) {
  global.pgPool = pool;
}

export async function getProjects(): Promise<Project[]> {
  const { rows } = await pool.query(
    `select id, title, company, period, role, category, stack, summary, highlights
     from projects
     order by period desc nulls last, title asc`,
  );

  return rows as Project[];
}
