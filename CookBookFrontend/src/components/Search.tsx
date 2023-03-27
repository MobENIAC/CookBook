import "../stylesheets/SearchSS.css";

import { FC, useState } from "react";
import { IRecipe } from "../services/interfaces";

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
