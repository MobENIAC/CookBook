import "../stylesheets/SearchSS.css"

import { FC, useState } from "react";

type SearchProps = {
    searchedRecipe: (searchedRecipe: string) => void,
}
export const Search: FC<SearchProps> = ({ searchedRecipe }) => {
    const handleSearchChange = (e: any) => {
        searchedRecipe(e.target.value);
    };

    return (
        <>
            <div className="search__main">
                <input className=""
                    type="text"
                    placeholder="Search here"
                    onChange={handleSearchChange}
                />
            </div>
            <br />
        </>
    );
}