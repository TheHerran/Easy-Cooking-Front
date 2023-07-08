import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/models/user/user.jsx";
import { Api } from "../../../services/api";
import RecipeCard from "../../Templates/RecipeCard/index.jsx";


export const UserSavedRecipes = () => {
    const [favorites, setFavorites] = useState(null)
    const { decodedToken } = useContext(UserContext)


    useEffect(() => {
        Api.get(`/profile/${decodedToken.username}/`)
            .then((response) => {
                setFavorites(response.data.favorites)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {favorites ? (
                favorites?.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)
            ) : (
                <h1>Não há receitas salvas</h1>
            )}
        </>
    );
};
