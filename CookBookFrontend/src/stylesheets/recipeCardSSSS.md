.cardsGallery {
  margin-top: 30px;
  row-gap: 60px;
}

.card {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 12px;
}

.recipeCard__container {
  padding: 15px 16px;
  text-align: center;
}

.card__image {
  border-radius: 10px;
  object-fit: cover;
}

@media (min-width: 600px) {
  .card:hover {
    scale: 1.05;
    box-shadow: 1px 1px 5px rgba(32, 129, 72, 0.621);
    transition: scale 300ms ease-in-out;
    cursor: pointer;
  }

  .cardsGallery {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 30px;
  }

  .card {
    width: 47%;
  }

  .card__image {
    height: 200px;
    margin: 5px 10px;
  }
}

@media (min-width: 800px) {
  .card {
    width: 25%;
    /* width: 30%; */
  }

  .card__image {
    height: 100px;
  }

  .card__headline {
    font-size: 12px;
  }

  .card {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  /* .card__image {
    height: 200px;
  } */
  .card {
    width: 25%;
    /* width: 30%; */
  }

  .card__headline {
    font-size: 18px;
  }
}

@media (min-width: 1800px) {
  .card {
    width: 28%;
  }
}