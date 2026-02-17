export interface Project {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repoUrl: string;
  deployUrl: string;
  borderColor: string;
  gradient: string;
  showInstallButton?: boolean;
}

export interface ProjectLabels {
  repository: string;
  private: string;
  project: string;
  installInCursor: string;
}
