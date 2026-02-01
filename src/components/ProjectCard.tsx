import Link from "next/link";
import { ProjectExercise } from "@/types/project";

interface ProjectCardProps {
  project: ProjectExercise;
}

const difficultyColors = {
  Easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Hard: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-200">
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-2">
            {project.isPrivate && (
              <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                Private Architecture
              </span>
            )}
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColors[project.difficulty]}`}
            >
              {project.difficulty}
            </span>
          </div>
        </div>

        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {project.industry}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200">
            {project.isPrivate ? "View Technical Case Study" : "View Project"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
