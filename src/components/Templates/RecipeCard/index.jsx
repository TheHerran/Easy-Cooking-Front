import { RecipeCardContainer, Span, StyledButton, StyleRating} from "./style.js";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

import { Api } from "../../../services/api.js";

function RecipeCard({ recipe, del, setMyRecipes, myRecipes }) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(2);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    const value = recipe.reviews?.reduce((prev, acc) => prev + acc.rating, 0);
    const result = value / recipe.reviews.length;
    setRating(result);
  }, []);

  const handleView = () => {
    navigate(`/receita/${recipe.id}`);
  };

  const handleDelete = () => {
    const token = localStorage.getItem("@Easy:Token");
    Api.delete(`/recipes/${recipe.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const newList = myRecipes.filter((e) => e !== recipe);
        console.log(res);
        setMyRecipes(newList);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
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
          <img src={recipe.image} alt="" />
        </figure>

        <p className="RecipeName">{recipe.name}</p>

        {del && (
          <span className="delBtn" onClick={() => handleDelete()}>
            Delete
          </span>
        )}
        <div>
          <StyleRating>
            <Rating value={rating} size="small" readOnly />
          </StyleRating>

          <Span className="RecipeButton" lunch={recipe.category}>
            {recipe.category}
          </Span>
        </div>
      </RecipeCardContainer>
    </>
  );
}

export default RecipeCard;
