import { autorun, makeAutoObservable, runInAction } from "mobx";
import { TRepoCard } from "../components/RepoCard/TRepoCard";
import { getData } from "../utils/API";

class GhSearchStore {
  repositories: TRepoCard[] = [];
  starredRepositories: TRepoCard[] = [];
  title: string = "";
  copiedText: string = "";
  isFavorite: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.loadFromLocalStorage();

    autorun(() => {
      const data = {
        repositories: this.repositories,
        starredRepositories: this.starredRepositories,
        title: this.title,
        isFavorite: this.isFavorite,
      };
      localStorage.setItem("ghSearchData", JSON.stringify(data));
    });
  }

  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("ghSearchData") || "{}");
    this.repositories = data.repositories || [];
    this.starredRepositories = data.starredRepositories || [];
    this.title = data.title || "";
    this.isFavorite = data.isFavorite || false;
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.title = event.currentTarget.value.trim();
  };

  async loadRepositories(title: string) {
    this.isLoading = true;
    const data = await getData(title);
    runInAction(() => {
      this.repositories = data.items;
      this.isLoading = false;
    });
  }

  async toggleStarred(repo: TRepoCard) {
    const index = this.starredRepositories.findIndex((r) => r.id === repo.id);
    if (index !== -1) {
      runInAction(() => {
        this.starredRepositories.splice(index, 1);
      });
    } else {
      const updatedRepo = { ...repo, isFavorite: true };
      runInAction(() => {
        this.starredRepositories.push(updatedRepo);
      });
    }
  }

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  // handleCopy = async () => {
  //   const text = this.title;
  //   await clipboardCopy(text);
  //   return text;
  // };
}

export default new GhSearchStore();
