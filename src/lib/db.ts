import { Pool } from "pg";
import type { Project } from "@/constants/projects";
import { projects as fallbackProjects } from "@/constants/projects";

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

const shouldUseDb = process.env.USE_DB !== "false";

const getPool = () => {
  if (!shouldUseDb) return null;
  if (global.pgPool) return global.pgPool;
  if (!process.env.DATABASE_URL) return null;

  try {
    global.pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    return global.pgPool;
  } catch (err) {
    console.error("[db] Pool 생성 실패, 로컬 데이터로 대체:", err);
    return null;
  }
};

export async function getProjects(): Promise<Project[]> {
  const pool = getPool();
  if (!pool) {
    return fallbackProjects;
  }

  try {
    const { rows } = await pool.query(
      `select id, title, company, period, role, category, stack, summary, highlights
       from projects
       order by period desc nulls last, title asc`,
    );
    return rows as Project[];
  } catch (err) {
    console.error("[getProjects] DB 사용 불가, 로컬 데이터로 대체:", err);
    return fallbackProjects;
  }
}
