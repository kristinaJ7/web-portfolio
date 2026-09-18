export interface TFooterContactsUIProps {
  email?: string;
  phone?: string;
  githubLink?: string;
  additionalLinks?: Array<{
    url: string;
    label: string;
    emoji?: string;
  }>;
}
