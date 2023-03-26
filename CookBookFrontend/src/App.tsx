import { useEffect, useState } from "react";
import { IRecipe } from "./services/interfaces";
import "./App.css";
import { addRecipe, getRecipes, updateRecipe } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";

function App() {

  const addData = async (data: IRecipe) => {
    await addRecipe(data);
  }

  return (<>
    <article className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<CookBookMain />}></Route>
          <Route path="/add" element={<AddRecipe addRecipes={addData} />}></Route>
          <Route path="*" element={<Outlet />}></Route>
        </Routes>
      </Router>

    </article>
  </>
  );
}
export default App;


