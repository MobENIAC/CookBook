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
            <div>
                <input className=""
                    type="search"
                    placeholder="Search here"
                    onChange={handleSearchChange}
                />
            </div>
            <br />
        </>
    );
}