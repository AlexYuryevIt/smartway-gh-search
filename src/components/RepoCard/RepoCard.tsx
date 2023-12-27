import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import GhSearchStore from "../../Store/GhSearchStore";
import pin from "../../assets/pin.svg";
import pin_filled from "../../assets/pin_filled.svg";
import star from "../../assets/star.svg";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { PinButton } from "../PinButton/PinButton";
import {
  CardAvatar,
  CardButtonsWrapper,
  CardForks,
  CardInnerWrapper,
  CardStars,
  CardStatsWrapper,
  CardTitle,
  CardWrapper,
  PinButtonWrapper,
} from "./RepoCardStyles";
import { TRepoCard } from "./TRepoCard";

export type TCardProps = {
  card: TRepoCard;
};

export const RepoCard: React.FC<TCardProps> = observer(({ card }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/repository/${card.id}`);
  };

  return (
    <CardWrapper id={String(card.id)}>
      <CardInnerWrapper>
        <CardAvatar src={card.owner.avatar_url}></CardAvatar>
        <Link link={card.html_url}>
          <CardTitle>{card.full_name}</CardTitle>
        </Link>
        <PinButtonWrapper>
          <PinButton onClick={() => GhSearchStore.toggleStarred(card)}>
            {GhSearchStore.starredRepositories.some(
              (repo) => repo.id === card.id
            ) ? (
              <img src={pin_filled} />
            ) : (
              <img src={pin} />
            )}
          </PinButton>
        </PinButtonWrapper>
      </CardInnerWrapper>

      <CardStatsWrapper>
        <CardStars>
          <img src={star} alt="" width={15} height={15} />
          {card.stargazers_count ? (
            <>
              <span style={{ marginLeft: "3px" }}>{card.stargazers_count}</span>
            </>
          ) : (
            <span style={{ marginLeft: "3px" }}>0</span>
          )}
        </CardStars>
        <CardForks>Forks {card.forks ? card.forks : "0"}</CardForks>
        <CardButtonsWrapper>
          <Button title="More" onClick={() => handleNavigate()} />
        </CardButtonsWrapper>
      </CardStatsWrapper>
    </CardWrapper>
  );
});
