import { ProjectExercise } from "@/types/project";

export const projects: ProjectExercise[] = [
  {
    id: "1",
    title: "Manufacturing Workflow UI",
    industry: "Manufacturing",
    difficulty: "Hard",
    timeSpent: "8 hours",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Flow"],
    challengeBrief:
      "Design an interactive node-based editor for production pipelines that allows operators to visualize bottlenecks and status updates in real-time.",
    engineeringDecision:
      "Integrated **React Flow** to manage the complex graph-based UI, paired with **Zustand** for lightweight, centralized state management. This combination enabled efficient node updates and seamless drag-and-drop performance without the overhead of heavy global state libraries.",
    githubUrl: "https://github.com/Meowmerry/shop-floor-workflow-ui",
    liveDemoUrl: "https://manufacturing-dashboard-workflow.vercel.app/",
  },
  {
    id: "2",
    title: "AI Interview Booking",
    industry: "HR Tech",
    difficulty: "Medium",
    timeSpent: "6 hours",
    techStack: ["Next.js", "TypeScript", "Prisma", "OpenAI API", "Tailwind CSS"],
    challengeBrief:
      "Develop a smart scheduling portal that parses candidate availability using natural language and automates the matching process for interviewers.",
    engineeringDecision:
      "Leveraged **OpenAI API** to transform unstructured user input into structured JSON availability data. Implemented **Prisma** as an ORM to handle complex relational queries for conflict detection, ensuring 100% accuracy in calendar slotting.",
    githubUrl: "https://github.com/example/ai-interview-booking",
    liveDemoUrl: "https://ai-interview-booking.vercel.app",
  },
];