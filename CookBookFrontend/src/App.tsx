import { useEffect, useState } from "react";
import { IRecipe } from "./services/interfaces";
import "./App.css";
import { getRecipes } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TEST2 } from "./components/TEST2";
import { TEST4 } from "./components/TEST4";
import { AddRecipe } from "./components/AddRecipe";

function App() {
  return (<>
       <article className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CookBookMain />}></Route>
          <Route path="/add" element={<AddRecipe />}></Route>
          <Route path="*" element={<Outlet />}></Route>
        </Routes>
      </Router>

    </article>
  </>
  );
}
export default App;


