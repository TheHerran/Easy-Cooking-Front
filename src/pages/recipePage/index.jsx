/* eslint-disable eqeqeq */
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Templates/Header";
import { RecipesContext } from "../../Providers/models/recipes/recipes";
import {
  ContentPage,
  NameRecipe,
  Preparation,
  RatingStyle,
  StyleContainer,
} from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { Rating } from "@mui/material";
import { UserContext } from "../../Providers/models/user/user";
import { useEffect } from "react";
import { IngredientsContext } from "../../Providers/models/ingredients/ingredients";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function RecipePage() {
  const { recipeName } = useParams();
  const { ratingMax } = useContext(IngredientsContext);

  const { saveRecipe } = useContext(UserContext);

  const [rating, setRating] = useState(null);
  const [onlyRecipe, setonlyRecipe] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    Api.get(`/recipes/${+recipeName}`)
      .then((res) => {
        setonlyRecipe(res.data);
      })
      .catch((err) => console.log(err));

    const value = onlyRecipe?.reviews?.reduce(
      (prev, acc) => prev + acc.rating,
      0
    );
    const result = value / onlyRecipe?.reviews.length;

    setRating(result);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@Easy:Token");
    const id = localStorage.getItem("@Easy:Id");
    Api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  });

  const handleBack = () => {
    window.history.back();
  };

  const handleRating = (e) => {
    ratingMax(user, onlyRecipe, e);
    setRating(e);
  };

  const handleSave = () => {
    const data = user?.favorites;

    if (data?.map((recipe) => recipe.id).includes(onlyRecipe.id)) {
      toast.info("Esta receita já está salva");
      console.log("receita já salva");
    } else {
      toast.success("A receita foi salva com sucesso");
      data?.push(onlyRecipe);
      return saveRecipe(data);
    }
  };
  console.log(user?.favorites);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Header />
        <NameRecipe>
          <div className="titleAndRating">
            <h1>{onlyRecipe?.name}</h1>
            {user ? (
              <RatingStyle>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    handleRating(newValue);
                  }}
                />
              </RatingStyle>
            ) : (
              <RatingStyle>
                <Rating readOnly value={rating} />
              </RatingStyle>
            )}
          </div>

          <div className="divBtn">
            <button
              onClick={() => {
                handleBack();
              }}
            >
              <AiOutlineArrowLeft /> Voltar
            </button>
            <button
              onClick={() => {
                handleSave();
              }}
            >
              Salvar <BsFillSaveFill />
            </button>
          </div>
        </NameRecipe>
        <StyleContainer>
          <ContentPage>
            <div className="divIngredients">
              <h2>Ingredientes</h2>
              <ul>
                {onlyRecipe?.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="divImage">
              <figure>
                <img src={onlyRecipe?.image} alt={onlyRecipe?.name} />
              </figure>
            </div>
          </ContentPage>
          <Preparation>
            <h2>Modo de preparo</h2>
            <p>{onlyRecipe?.preparation_mode}</p>
          </Preparation>
        </StyleContainer>
      </>
    </motion.div>
  );
}

export default RecipePage;
