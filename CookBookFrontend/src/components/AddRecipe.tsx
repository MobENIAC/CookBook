import { FC, useEffect, useState } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRecipe, IListIngredientApi } from "../services/interfaces";
import { getIngredientsApi } from "../services/api";
import "../stylesheets/AddRecipe.css";
import { useNavigate } from "react-router-dom";

type AddRecipeProps = {
  addRecipes: (recipe: IRecipe) => void;
  foundId: string;
};

export const AddRecipe: FC<AddRecipeProps> = ({ addRecipes, foundId }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [savingChanges, setSavingChanges] = useState<boolean>(false);
  const [ingredientsExternalApi, setIngredientsExternalApi] =
    useState<IListIngredientApi>();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be minimum 3 characters")
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
    imageURL: yup.string().required("Image URL is required"),
    categories: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Category name is required")
          .min(3, "Category name must be minimum 3 characters")
          .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
        type: yup.string().required("Category type is required"),
      })
    ),
    ingredients: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Ingredient name is required")
          .min(3, "Ingredient name must be minimum 3 characters")
          .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
        unit: yup.string().required("Ingredient unit is required"),
        quantity: yup.number().required("Ingredient quantity is required"),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRecipe>({
    resolver: yupResolver(schema),
  });

  const {
    fields: categoryField,
    append: categoryAppend,
    remove: categoryRemove,
  } = useFieldArray<IRecipe>({
    control,
    name: "categories",
  });

  const {
    fields: ingredientField,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray<IRecipe>({
    control,
    name: "ingredients",
  });

  const onSubmit: SubmitHandler<IRecipe> = (data: IRecipe) => {
    var recipe: IRecipe = {
      id: 0,
      name: data.name,
      imageURL: data.imageURL,
      description: data.description,
      instructions: data.instructions,
      createdByUser: foundId,
      categories: data.categories,
      ingredients: data.ingredients
    }

    addRecipes(recipe);
    setSavingChanges(!savingChanges);
    let timer = setTimeout(() => {
      setSavingChanges(!savingChanges);
      setSuccess(!success);
      timer = setTimeout(() => {
        navigate("/home");
      }, 6000);
    }, 6000);
    return () => clearTimeout(timer);
  };

  const getingredientsExternalApi = async () => {
    const ingredientsFromExternalApi = await getIngredientsApi();
    setIngredientsExternalApi(ingredientsFromExternalApi);
  };

  useEffect(() => {
    getingredientsExternalApi();
  }, []);

  return (
    <section className="addRecipe__section">
      <h3 className="addrecipe__heading">Add New Recipe</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addrecipe__inputField">
          <label htmlFor="name">Recipe Name</label>
          <input id="name" type="text" placeholder="Required field" {...register("name")} />
          {errors.name && (
            <span className="errorMessage">
              {errors.name?.message?.toString()}
            </span>
          )}
        </div>
        <div className="addrecipe__inputField">
          <label htmlFor="imageURL">Image URL</label>
          <input id="imageURL" type="text" placeholder="Required field" {...register("imageURL")} />
          {errors.imageURL && (
            <span className="errorMessage">
              {errors.imageURL?.message?.toString()}
            </span>
          )}
        </div>
        <div className="addrecipe__inputField">
          <label htmlFor="description">Recipe Description</label>
          <input id="description" type="text" {...register("description")} />
          {errors.description && (
            <span className="errorMessage">
              {errors.description?.message?.toString()}
            </span>
          )}
        </div>
        <div className="addrecipe__inputField">
          <label htmlFor="instructions">Recipe Instructions</label>
          <textarea id="instructions" {...register("instructions")} />
          {errors.instructions && (
            <span className="errorMessage">
              {errors.instructions?.message?.toString()}
            </span>
          )}
        </div>

        {categoryField.map((field, index) => (
          <div key={field.id} className="data-card">
            <div className="addrecipe__inputField">
              <span
                className="close add__close"
                onClick={() => categoryRemove(index)}
              >
                &times;
              </span>
              <label htmlFor={`categories.${index}.name`}>
                Name of Category
              </label>
              <div className="addrecipe__unit-quantity">
              <div className="addrecipe__categories">
                <input
                  className="addrecipe__Box"
                  id={`categories.${index}.name`}
                  type="text"
                  placeholder="Required field"
                  {...register(`categories.${index}.name`)}
                />
                {errors.categories && errors.categories[index] && (
                  <span className="errorMessage">
                    {errors.categories[index]!.name?.message?.toString()}
                  </span>
                )}
              </div>
              <select className="addrecipe__selectType" {...register(`categories.${index}.type`)} >
                <option value="">Select Type</option>
                <option>Ethnic</option>
                <option>Dietary</option>
              </select>
              {errors.categories && errors.categories[index] && (
                <span className="errorMessage">
                  {errors.categories[index]!.message?.toString()}
                </span>
              )}
              </div>
            </div>
          </div>
        ))}

        <button
          className="recipe__button"
          type="button"
          onClick={() => categoryAppend({ id: 0, name: "", type: "" })}
        >
          Add New Category
        </button>

        {ingredientField.map((field, index) => (
          <div key={field.id} className="data-card ingredient-card">
            <div className="addrecipe__inputField">
              <span
                className="close add__close"
                onClick={() => ingredientRemove(index)}
              >
                &times;
              </span>
              <label htmlFor={`ingredients.${index}.name`}>
                Name of Ingredient
              </label>
              <datalist id="suggestions">
                {ingredientsExternalApi!.meals.map((x) => (
                  <option
                    key={x.idIngredient}
                    value={`${x.strIngredient}`}
                  ></option>
                ))}
              </datalist>
              <input
              className="addrecipe__ingredientName" 
                id={`ingredients.${index}.name`}
                type="text"
                list="suggestions"
                placeholder="Required field"
                {...register(`ingredients.${index}.name`)}
              />
              {errors.ingredients && errors.ingredients[index] && (
                <span className="errorMessage">
                  {errors.ingredients[index]!.name?.message?.toString()}
                </span>
              )}
            </div>
            <div className="addrecipe__inputField">
              <label className="addrecipe__quantityHeadline" htmlFor={`ingredients.${index}.quantity`}>
                Quantity of Ingredient
              </label>
              <div className="addrecipe__inputField addrecipe__unit-quantity">
                <input
                  className="addrecipe__Box"
                  id={`ingredients.${index}.quantity`}
                  type="text"
                  {...register(`ingredients.${index}.quantity`)}
                />
                {errors.ingredients && errors.ingredients[index] && (
                  <span className="errorMessage">
                    {errors.ingredients[index]!.quantity?.message?.toString()}
                  </span>
                )}
                <select id={`ingredients.${index}.unit`} {...register(`ingredients.${index}.unit`)}>
                  <option value="">Select Unit</option>
                  <option value="Grams">Grams</option>
                  <option value="Kg">Kg</option>
                  <option value="Amount">Amount</option>
                </select>

                {errors.ingredients && errors.ingredients[index] && (
                  <span className="errorMessage">
                    {errors.ingredients[index]!.unit?.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        <button
          className="recipe__button"
          type="button"
          onClick={() =>
            ingredientAppend({ id: 0, name: "", unit: "", quantity: 0 })
          }
        >
          Add New Ingredient
        </button>
        <button className="recipe__button" type="submit">
          Submit
        </button>
      </form>
      {savingChanges && (
        <>
          <p>Creating instructions, please wait</p>{" "}
          <p className="loading">...</p>
        </>
      )}
      {success && <p>✅ Success!</p>}
    </section>
  );
};
