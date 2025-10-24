import { useEffect } from "react";
import { Project } from "../../constants/projects";
import { XIcon } from "lucide-react";

interface Props {
  open: boolean;
  project?: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <>
      <div className="fixed inset-0 z-[60]">
        <div
          className="absolute inset-0 bg-gray-500/35 backdrop-blur-[2px]"
          aria-hidden
          onClick={onClose}
        />
        <div
          aria-modal="true"
          className="absolute left-1/2 top-1/2 w-full sm:w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2
                   rounded-2xl border border-black/4 dark:border-white/10 p-6 bg-white/90 dark:bg-gray-900/90 dark:bg-gray/10 shadow-2xl py-15">
          {/* 닫기(X) 아이콘 */}
          <div className="absolute right-4 top-4 opacity-50 hover:cursor-pointer hover:scale-110">
            <XIcon size={25} onClick={onClose} />
          </div>
          {/* 닫기(X) 아이콘 */}

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs opacity-70">
                {project.period} · {project.role}
              </div>
              <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
              {project.company && <div className="mt-1 text-sm opacity-80">{project.company}</div>}
            </div>
          </div>

          <p className="mt-4 text-sm opacity-90">{project.summary}</p>

          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-extrabold border-[1px] border-black/20 dark:border-white/50">
              {project.category}
            </span>
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] border-[1px] border-black/20 dark:border-white/50 ">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
