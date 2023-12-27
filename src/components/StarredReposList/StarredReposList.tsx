import { observer } from "mobx-react-lite";
import GhSearchStore from "../../Store/GhSearchStore";
import { RepoCard } from "../RepoCard/RepoCard";

export const StarredRepositories = observer(() => {
  return (
    <>
      {GhSearchStore.starredRepositories.map((card) => (
        <RepoCard key={card.id} card={card} />
      ))}
    </>
  );
});
