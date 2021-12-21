import tw, { css, styled } from "twin.macro";

const SearchContainer = styled.form(
  tw`w-full relative h-12 rounded-lg p-2 pr-12 overflow-hidden`
);

const InputSearch = styled.input(
  tw`absolute top-0 outline-none left-0 h-full w-full text-base font-normal pl-12 bg-black-background-sidebar text-white  placeholder:text-white placeholder:font-normal placeholder:text-base`
);

const ButtonSearch = styled.button(
  tw`z-10 absolute top-0 left-0 flex flex-shrink-0 h-12 w-12 m-0 p-0 outline-none bg-none justify-center items-center`
);

function Search() {
  return (
    <SearchContainer>
      <ButtonSearch onClick={(e) => e.preventDefault()}>
        <img src="/icons/SEARCH.svg" alt="Search" width="24px" height="24px" />
      </ButtonSearch>
      <InputSearch
        type="search"
        name="search"
        id="search"
        placeholder="Search"
      />
    </SearchContainer>
  );
}

export default Search;
