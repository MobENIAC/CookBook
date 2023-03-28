import { FC } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { IRecipe } from "../services/interfaces";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Header.css';

type HeaderProps = {
    recipes: IRecipe[],
}

export const Header: FC<HeaderProps>  = ({ recipes }) => {

    return (
        <header className="mb-5" >
            <h1 className="header__heading">Cook Book</h1>
            <h3 className="header__slogan">Find popular recipes online</h3>
            <Carousel className="header__carousel">
            {recipes.map(recipe => 
                <Carousel.Item key={recipe.id}>
                    <img
                        className="d-block w-100 header__carousel__image"
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