type DatedProject = { period: string };

function startDate(period: string): number | null {
  const match = period.trim().match(/^(\d{4})\.(\d{1,2})(?:\.(\d{1,2}))?(?=$|[\s~–—-])/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3] ?? 1);
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return timestamp;
}

export function sortProjectsByDate<T extends DatedProject>(projects: readonly T[], order: "newest" | "oldest"): T[] {
  return projects
    .map((project, index) => ({ project, index, date: startDate(project.period) }))
    .sort((a, b) => {
      // Undated entries stay last in both directions; equal dates preserve input order.
      if (a.date === null) return b.date === null ? a.index - b.index : 1;
      if (b.date === null) return -1;
      return (order === "newest" ? b.date - a.date : a.date - b.date) || a.index - b.index;
    })
    .map(({ project }) => project);
}
