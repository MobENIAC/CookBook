import { IRecipe } from "./services/interfaces";
import { addRecipe } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";

function App() {

  const addData = async (data: IRecipe) => {
    await addRecipe(data);
  }

  return (
  <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CookBookMain />}></Route>
          <Route path="/add" element={<AddRecipe addRecipes={addData} />}></Route>
          <Route path="*" element={<CookBookMain />}></Route>
        </Routes>
      </Router>
  </>
  );
}
export default App;


