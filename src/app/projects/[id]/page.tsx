import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

const difficultyColors = {
  Easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Hard: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Gallery
          </Link>
          {!project.isPrivate && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code on GitHub
            </a>
          )}
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3">
            {project.isPrivate && (
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                Private Architecture
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              {project.title}
            </h1>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${difficultyColors[project.difficulty]}`}
            >
              {project.difficulty}
            </span>
          </div>
          {project.isPrivate && (
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Technical Case Study — Code and demo are confidential
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{project.industry}</span>
            <span>•</span>
            <span>{project.timeSpent}</span>
          </div>
        </header>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* The Brief */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            The Brief
          </h2>
          <blockquote className="border-l-4 border-zinc-300 bg-zinc-100 py-4 pl-6 pr-4 italic text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            "{project.challengeBrief}"
          </blockquote>
        </section>

        {/* Engineering Decisions */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Engineering Decisions
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
              {project.engineeringDecision}
            </p>
          </div>
        </section>

        {/* Live Demo Link - only show if not private */}
        {!project.isPrivate && project.liveDemoUrl && (
          <section>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              View Live Demo
            </a>
          </section>
        )}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
