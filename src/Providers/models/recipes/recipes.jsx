import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(null);
  const [searchOn, setSearchOn] = useState(false);
  const [recipesTitles, setRecipesTitles] = useState();
  const token = localStorage.getItem("@Easy:Token");
  const userId = localStorage.getItem("@Easy:Id");

  useEffect(() => {
    Api.get("/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  async function RegisterRecipe({
    name,
    preparation_mode,
    image,
    category,
    ingredients,
  }) {
    const data = {
      name,
      preparation_mode,
      image,
      category,
      ingredients,
      userId,
    };
    await Api.post("/recipes", data, {
      auth: `Bearer ${token}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function searchRecipesTitle(data) {
    const searchRecipes = recipes.filter((element) => {
      if (
        element.name
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          .toLowerCase()
          .includes(
            data
              .normalize("NFD")
              .replace()
              .toLowerCase(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          )
      ) {
        setSearchOn(true);
        return element;
      }
    });
    setRecipesTitles(searchRecipes);
  }

  function searchRecipesIngredients(data) {
    const ingredients = data.split(", ");

    const searchRecipes = ingredients.map((ingredient) => {
      return recipes.find((element) => {
        if (
          element.ingredients.some((e) =>
            e.name
              .normalize("NFD")
              .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
              .includes(
                ingredient
                  .normalize("NFD")
                  .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
                  .toLowerCase()
              )
          )
        ) {
          setSearchOn(true);
          return element;
        }
      });
    });
    const filteredRecipes = searchRecipes.filter(
      (element, index) => searchRecipes.indexOf(element) === index
    );
    setRecipesTitles(filteredRecipes);
  }

  function tagFilter(data) {
    if (data === "Lanches") {
      setRecipesTitles(recipes.filter((e) => e.category === "Lanches"));
      setSearchOn(true);
    } else if (data === "Prato Principal") {
      setRecipesTitles(recipes.filter((e) => e.category === "Prato Principal"));
      setSearchOn(true);
    } else if (data === "Bebidas") {
      setRecipesTitles(recipes.filter((e) => e.category === "Bebidas"));
      setSearchOn(true);
    } else if (data === "Sobremesas") {
      setRecipesTitles(recipes.filter((e) => e.category === "Sobremesas"));
      setSearchOn(true);
    } else {
      setRecipesTitles(recipes);
      searchOn(false);
    }
  }

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        RegisterRecipe,
        setSearchOn,
        searchOn,
        searchRecipesTitle,
        recipesTitles,
        searchRecipesIngredients,
        tagFilter,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
