import { IRecipe, IUser, IUserPut } from "./services/interfaces";
import { addRecipe, getInstructionsGPT, getRecipes, getUsers, updateUser } from "./services/api";
import { CookBookMain } from "./components/CookBookMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddRecipe } from "./components/AddRecipe";
import { useEffect, useState } from "react";
import { MealPlannerGallery } from "./components/MealPlannerGallery";

function App() {
  const [id, setId] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const addData = async (data: IRecipe) => {
    if (data.instructions === "") {
      let query = `Write a recipe based on these ingredients and instructions: ${data.name} Instructions:`;
      const gtpQuery = data.ingredients.map(
        (c) => (query = query + c.name + " " + c.quantity + " " + c.unit)
      );
      query = query + " Instructions:";
      data.instructions = await getInstructionsGPT(query);
      await addRecipe(data);
      return;
    }
    await addRecipe(data);
    getUsersData();
    getData();
  };

  const getUsersData = async () => {
    const usersFromApi = await getUsers();
    setUsers(usersFromApi);
  };


  const userId = (id: string) => {
    setId(id);
  };

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }

  const updateUserData = async (id: number, data: IUserPut) => {
    await updateUser(id, data);
    getData();
  }

  const update = (boolean: boolean) => {
    if (boolean) {
      getUsersData();
      getData();
    }
  }

  useEffect(() => {
    getUsersData();
    getData();
  }, []);

  return (
    <>
      <Router>
        <Navbar userId={userId} />
        <Routes>
          <Route
            path="/home"
            element={<CookBookMain foundId={id} refreshUsers={update} />}
          ></Route>
          <Route path="/" element={<CookBookMain foundId={id} refreshUsers={update} />}></Route>
          <Route
            path="/add"
            element={<AddRecipe addRecipes={addData} foundId={id} />}
          ></Route>
          <Route
            path="/mealplanner"
            element={<MealPlannerGallery getUsers={users} recipesFromApi={recipes} foundId={id} updateUsers={update} />}
          ></Route>
          <Route path="*" element={<CookBookMain foundId={id} refreshUsers={update} />}></Route>
        </Routes>
      </Router>
      <footer className="footer">
        <h3>Thanos Tas Terhi <img src="" alt="" /></h3>
      </footer>
    </>

  );
}
export default App;
