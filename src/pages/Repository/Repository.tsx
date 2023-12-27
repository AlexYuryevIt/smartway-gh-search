import { observer } from "mobx-react-lite";
import { Header } from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import GhSearchStore from "../../Store/GhSearchStore";
import { Button } from "../../components/Button/Button";
import { RepositoryCard } from "../../components/AdditionalInfoCard/RepositoryCard";
import { TRepositoryCard } from "../../components/AdditionalInfoCard/TRepositoryCard";

export const Repository = observer(() => {
  const { cardId } = useParams();
  const id = Number(cardId);
  const card = GhSearchStore.repositories.find((repo) => repo.id === id);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <>
      <Button onClick={() => handleNavigate()} title="Back" />
      <Header header={card?.full_name ? card?.full_name : "Привет"} />
      <RepositoryCard key={id} repoCard={card as TRepositoryCard} />
    </>
  );
});
