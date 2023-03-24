import { useEffect, useState } from "react";
import { IRecipe } from "./services/interfaces";
import "./App.css";
import { getRecipes } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";

function App() {
  return <>
    <CookBookMain />
  </>;
}
export default App;


