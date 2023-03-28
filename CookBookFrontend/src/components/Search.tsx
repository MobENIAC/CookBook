

import { FC } from "react";
import { IRecipe } from "../services/interfaces";
import '../stylesheets/Search.css';

type SearchProps = {
  searchedRecipe: (searchedRecipe: string) => void;
  recipes: IRecipe[];
};
export const Search: FC<SearchProps> = ({ searchedRecipe, recipes }) => {
  const handleSearchChange = (e: any) => {
    searchedRecipe(e.target.value);
  };

  return (
    <>
      <div className="search__main">
        <input
          className=""
          type="text"
          placeholder="Search here"
          onChange={handleSearchChange}
        />
      </div>
      <br />
    </>
  );
};
