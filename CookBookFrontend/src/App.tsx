import { IRecipe } from "./services/interfaces";
import { addRecipe, getInstructionsGPT } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";
import { useState } from "react";

function App() {
  const [id, setId] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  const addData = async (data: IRecipe) => {
    // console.log(data.instructions);
    if (data.instructions === "") {
      let query = `Write a recipe based on these ingredients and instructions: ${data.name} Instructions:`;
      const gtpQuery = data.ingredients.map(
        (c) => (query = query + c.name + " " + c.quantity + " " + c.unit)
      );
      query = query + " Instructions:";
      data.instructions = await getInstructionsGPT(query);
      // console.log(data.instructions);
      // console.log(query);
      await addRecipe(data);
    /*   setRefresh(!refresh); */
      return;
    }
    /* setRefresh(!refresh); */
    await addRecipe(data);
  };

  const userId = (id: string) => {
    setId(id);
  }

  return (
    <>
      <Router>
        <Navbar userId={userId} />
        <Routes>
          <Route path="/home" element={<CookBookMain foundId={id} /* refresh={refresh} *//>}></Route>
          <Route path="/" element={<CookBookMain foundId={id} />}></Route>
          <Route
            path="/add"
            element={<AddRecipe addRecipes={addData} foundId={id} />}
          ></Route>
          <Route path="*" element={<CookBookMain foundId={id} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
