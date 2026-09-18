export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  demoLink?: string;
}

export interface ProjectsUIProps {
  projects?: ProjectItem[];
}
