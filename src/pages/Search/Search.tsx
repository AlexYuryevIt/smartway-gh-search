import clipboardCopy from "clipboard-copy";
import debounce from "lodash.debounce";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import GhSearchStore from "../../Store/GhSearchStore";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Loader } from "../../components/Loader/Loader";
import { RepositoriesList } from "../../components/RepoList/RepoList";
import { StarredRepositories } from "../../components/StarredReposList/StarredReposList";
import { FormWrapper, RepositoriesWrapper, Wrapper } from "./SearchPageStyles";

export const SearchPage = observer(() => {
  const [buttonTitle, setButtonTitle] = useState("Copy");
  const [perPage, setPerpage] = useState<string>("");

  useEffect(() => {
    const debouncedFetch = debounce(() => {
      GhSearchStore.loadRepositories(GhSearchStore.title, perPage);
    }, 1000);
    if (GhSearchStore.title) {
      debouncedFetch();
    }
    return () => {
      debouncedFetch.cancel();
    };
  }, [GhSearchStore.title, perPage]);

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerpage(event.target.value);
  };

  const handleCopy = async () => {
    setButtonTitle("Copied");
    await clipboardCopy(GhSearchStore.title);
    setTimeout(() => {
      setButtonTitle("Copy");
    }, 2000);
  };

  return (
    <>
      <FormWrapper>
        <Header header="Github Search" />
        <Form onSubmit={GhSearchStore.handleFormSubmit}>
          <Input
            input={{
              placeholder: "Type to search",
              value: GhSearchStore.title,
              name: "title",
              onInput: GhSearchStore.handleInputChange,
            }}
          />
          <Button title={buttonTitle} onClick={() => handleCopy()} />
        </Form>
      </FormWrapper>

      <>
        <select onChange={handlePerPageChange}>
          <option value="10">10</option>
          <option value="15">30</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
        <RepositoriesWrapper>
          <Wrapper>
            {GhSearchStore.isLoading ? <Loader /> : <RepositoriesList />}
            {GhSearchStore.repositories.length === 0 && "No repositories"}
          </Wrapper>
          <Wrapper>
            {GhSearchStore.starredRepositories ? <StarredRepositories /> : ""}
          </Wrapper>
        </RepositoriesWrapper>
      </>
    </>
  );
});
