export type TRepositoryCard = {
  id: string | number;
  full_name: string;
  html_url: string;
  stargazers_count: string;
  forks: string | undefined;
  description: string;
  language: string;
  owner: TOwner;
  isFavorite: boolean;
  open_issues_count: string;
};
type TOwner = {
  login: string;
  avatar_url: string;
  html_url: string;
};
