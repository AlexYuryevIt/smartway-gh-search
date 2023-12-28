import { TRepoCard } from "../components/RepoCard/TRepoCard";

export const getData = async (
  title: string,
  perPage: number
): Promise<{ items: TRepoCard[] }> => {
  const base = "https://api.github.com";
  try {
    const response = await fetch(
      `${base}/search/repositories?q=${title}&per_page=${perPage}`
    );
    const data = await response.json();

    if (data.items.length === 0) {
      return { items: [] };
    }
    return data;
  } catch (error) {
    console.error(error);
    return { items: [] };
  }
};
