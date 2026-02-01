import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Deconstructed
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Job Exercise Showcase — Real take-home projects, documented and explained.
          </p>
        </header>

        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
