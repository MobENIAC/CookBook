import { useEffect, useState } from "react";
import { IRecipe } from "./services/interfaces";
import "./App.css";
import { addRecipe, getRecipes, updateRecipe } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";

function App() {
  const [updatedRecipe, setUpdatedRecipe] = useState<IRecipe>();

  const addData = async (data : IRecipe) => {
    const addedRecipe = await addRecipe(data);
    setUpdatedRecipe(addedRecipe);
  }

  return (<>
       <article className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CookBookMain updateRecipe={updatedRecipe}/>}></Route>
          <Route path="/add" element={<AddRecipe addRecipes={addData}/>}></Route>
          <Route path="*" element={<Outlet />}></Route>
        </Routes>
      </Router>

    </article>
  </>
  );
}
export default App;


