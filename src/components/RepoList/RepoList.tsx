import { observer } from "mobx-react-lite";
import GhSearchStore from "../../Store/GhSearchStore";
import { RepoCard } from "../RepoCard/RepoCard";
import { TRepoCard } from "../RepoCard/TRepoCard";

export const RepositoriesList: React.FC = observer(() => {
  return (
    <>
      {!GhSearchStore.repositories && "Oops, there is nothing here"}
      {GhSearchStore.repositories &&
        GhSearchStore.repositories.map((repo: TRepoCard) => (
          <RepoCard key={repo.id} card={repo} />
        ))}
    </>
  );
});
