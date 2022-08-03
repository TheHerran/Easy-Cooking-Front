import { FilterBar } from "../../components/Templates/FilterBar/index.jsx";
import RecipeCard from "../../components/Templates/RecipeCard/index.jsx";
import { Recipes, Container } from "./style.js";
import { useContext } from "react";
import { RecipesContext } from "../../Providers/models/recipes/recipes.jsx";
import { motion } from "framer-motion";

function Home() {
  const { recipes } = useContext(RecipesContext);

  const { searchOn } = useContext(RecipesContext);
  const { recipesTitles } = useContext(RecipesContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Container>
          <FilterBar />
          <Recipes>
            {!searchOn
              ? recipes?.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))
              : recipesTitles?.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
          </Recipes>
        </Container>
      </>
    </motion.div>
  );
}

export default Home;
