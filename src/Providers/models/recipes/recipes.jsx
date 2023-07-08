import { createContext, useEffect, useState } from "react";
import { Api, BearerToken } from "../../../services/api";
import { toast } from "react-toastify";

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
    const [recipes, setRecipes] = useState(null);
    const [searchOn, setSearchOn] = useState(false);
    const [recipesTitles, setRecipesTitles] = useState();
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        Api.get("/recipe/")
            .then((res) => setRecipes(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Api.get("/recipe/")
                .then((res) => setRecipes(res.data))
                .catch((err) => console.log(err));
        }, 2000)
    }, [refresh]);


    function searchRecipesTitle(data) {
        const searchRecipes = recipes?.filter((element) => {
            if (
                element.title
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

    function ratingMax(user, recipe, rating) {
        const data = { rating: rating };

        Api.post(`/rating/${recipe.id}/`, data, {
            headers: {
                Authorization: BearerToken,
            },
        })
            .then((res) => {
                toast.success("Avaliação feita")
            })
            .catch((err) => {
                toast.error("Falha ao avaliar")
            });
    }


    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setSearchOn,
                searchOn,
                searchRecipesTitle,
                recipesTitles,
                tagFilter,
                ratingMax,
                refresh,
                setRefresh
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
}
