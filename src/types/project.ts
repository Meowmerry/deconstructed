export interface ProjectExercise {
  id: string;
  title: string;
  industry: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeSpent: string;
  techStack: string[];
  challengeBrief: string;
  engineeringDecision: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isPrivate?: boolean;
}
