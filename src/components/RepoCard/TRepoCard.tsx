export type TRepoCard = {
  id: string | number;
  full_name: string;
  html_url: string;
  link?: string;
  stargazers_count: string;
  forks: string | undefined;
  owner: TOwner;
  isFavorite: boolean;
};
type TOwner = {
  login: string;
  avatar_url: string;
  html_url: string;
};
