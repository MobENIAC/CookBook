import { IRecipe } from "./services/interfaces";
import { addRecipe, getInstructionsGPT } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";

function App() {

  const addData = async (data: IRecipe) => {
    let query = `Write a recipe based on these ingredients and instructions: ${data.name} Instructions:`;
    
    const gtpQuery = data.ingredients.map(c =>(query= query + c.name + " " + c.quantity + " " + c.unit ));
    query = query + "Instructions:";
    data.instructions = await getInstructionsGPT(query);
    console.log(data.instructions);
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


