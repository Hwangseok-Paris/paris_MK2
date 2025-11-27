import { NextResponse } from "next/server";
import { getProjects } from "@/lib/db";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "DATABASE_URL is not set on the server." },
      { status: 500 }
    );
  }

  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export const revalidate = 0;
