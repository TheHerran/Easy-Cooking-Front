import { RecipeCardContainer, Span, StyleRating } from "./style";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { Api, BearerToken } from "../../../services/api";
import { RecipesContext } from "../../../Providers/models/recipes/recipes";

function RecipeCard({ recipe, del, setMyRecipes, myRecipes }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(2);
    const { refresh, setRefresh } = useContext(RecipesContext);

    useEffect(() => {
        const value = recipe.rating?.reduce((prev, acc) => prev + acc.rating, 0);
        const result = value / recipe.rating.length;
        setRating(result);
    }, []);

    const handleView = () => {
        navigate(`/receita/${recipe.id}`);
    };

    const handleDelete = () => {
        Api.delete(`/recipe/${recipe.id}/`, {
            headers: {
                Authorization: BearerToken,
            },
        })
            .then((res) => {
                const newList = myRecipes.filter((e) => e !== recipe);
                setMyRecipes(newList)
                setRefresh(!refresh)                
            })
            .catch((err) => console.log(err));
    };
    return (
        <RecipeCardContainer
            onClick={() => {
                !del && handleView();
            }}
        >
            <figure
                onClick={() => {
                    del && handleView();
                }}
                className="imgFig"
            >
                <img src={recipe.img} alt="" />
            </figure>

            <p className="RecipeName">{recipe.title}</p>

            {del && (
                <span className="delBtn" onClick={() => handleDelete()}>
                    Delete
                </span>
            )}
            <div className="ratingCatDiv">
                <div className="userRatingDiv">
                    <small>{recipe.username}</small>
                    <StyleRating>
                        <Rating value={rating} size="small" readOnly />
                    </StyleRating>
                </div>
                <Span className="RecipeButton" lunch={recipe.category}>
                    {recipe.category}
                </Span>
            </div>
        </RecipeCardContainer>
    );
}

export default RecipeCard;
