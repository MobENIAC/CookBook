import { FC, SyntheticEvent, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IRecipe } from "../services/interfaces";
import "../stylesheets/HeaderSS.css"

type HeaderProps = {
    recipes: IRecipe[],
}

export const Header: FC<HeaderProps>  = ({ recipes }) => {

    return (
        <header className="mb-5">
            <h1>Cook Book</h1>
            <h3>Find popular recipes online</h3>
            <Carousel className="w-75 carousel__border__color">
            {recipes.map(recipe => 
                <Carousel.Item key={recipe.id}>
                    <img
                        className="d-block w-100 headerCarousel"
                        src={recipe.imageURL}
                        alt={recipe.name}
                    />
                    <Carousel.Caption>
                        <h3>{recipe.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                )}
            </Carousel>
        </header>
    );

}