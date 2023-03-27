import "../stylesheets/SearchSS.css";

import { FC, useState } from "react";
import { IRecipe } from "../services/interfaces";

type SearchProps = {
  searchedRecipe: (searchedRecipe: string) => void;
  recipes : IRecipe[]
};
export const Search: FC<SearchProps> = ({ searchedRecipe, recipes }) => {
  const handleSearchChange = (e: any) => {
    searchedRecipe(e.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <button className="opposite__button">Categories</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

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
