import { observer } from "mobx-react-lite";
import { TRepositoryCard } from "./TRepositoryCard";
import GhSearchStore from "../../Store/GhSearchStore";
import {
  RepositoryCardWrapper,
  RepositoryCardInnerWrapper,
  RepositoryCardAvatar,
  RepositoryPinButtonWrapper,
  RepositoryCardDescription,
  RepositoryCardStatsWrapper,
  RepositoryCardStars,
  RepositoryCardForks,
  RepositoryIssues,
  RepoCardTitle,
  RepositoryLanguage,
} from "./RepositoryCardStyles";
import { PinButton } from "../PinButton/PinButton";
import pin from "../../assets/pin.svg";
import pin_filled from "../../assets/pin_filled.svg";
import star from "../../assets/star.svg";

type TAddCardProps = {
  repoCard: TRepositoryCard;
};

export const RepositoryCard: React.FC<TAddCardProps> = observer(
  ({ repoCard }) => {
    return (
      <RepositoryCardWrapper id={String(repoCard.id)}>
        <RepositoryCardInnerWrapper>
          <RepositoryCardAvatar
            src={repoCard.owner.avatar_url}
          ></RepositoryCardAvatar>
          <RepoCardTitle>{repoCard.owner.login}</RepoCardTitle>
          <RepositoryPinButtonWrapper>
            <PinButton onClick={() => GhSearchStore.toggleStarred(repoCard)}>
              {GhSearchStore.starredRepositories.some(
                (repo) => repo.id === repoCard.id
              ) ? (
                <img src={pin_filled} />
              ) : (
                <img src={pin} />
              )}
            </PinButton>
          </RepositoryPinButtonWrapper>
        </RepositoryCardInnerWrapper>

        {repoCard.description ? (
          <RepositoryCardDescription>
            {repoCard.description}
          </RepositoryCardDescription>
        ) : (
          ""
        )}

        {repoCard.language ? (
          <RepositoryLanguage>Language: {repoCard.language}</RepositoryLanguage>
        ) : (
          ""
        )}

        <RepositoryCardStatsWrapper>
          <RepositoryCardStars>
            <img src={star} alt="" width={15} height={15} />
            {repoCard.stargazers_count ? (
              <>
                <span style={{ marginLeft: "3px" }}>
                  {repoCard.stargazers_count}
                </span>
              </>
            ) : (
              <span style={{ marginLeft: "3px" }}>0</span>
            )}
          </RepositoryCardStars>
          <RepositoryCardForks>
            Forks {repoCard.forks ? repoCard.forks : "0"}
          </RepositoryCardForks>
          <RepositoryIssues>
            Open Issues {repoCard.open_issues_count}
          </RepositoryIssues>
        </RepositoryCardStatsWrapper>
      </RepositoryCardWrapper>
    );
  }
);
