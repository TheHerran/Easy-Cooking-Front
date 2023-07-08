import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/models/user/user";
import { AddRecipeModal } from "../../components/Templates/AddRecipeModal/index";
import RecipeCard from "../../components/Templates/RecipeCard/index";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { UserSavedRecipes } from "../../components/Templates/UserSavedRecipes";
import { Api, BearerToken } from "../../services/api";
import { Container } from "./style";

function DashBoard() {
    const { decodedToken } = useContext(UserContext)
    const [myRecipes, setMyRecipes] = useState(null);
    const [open, setOpen] = useState(false);
    const [buttonfilter, setButtonfilter] = useState("userRecipes");
    const [onSaved, setOnSaved] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState(false);

    useEffect(() => {
        Api.get(`/user/${decodedToken.username}/recipes/`)
            .then((res) => setMyRecipes(res.data))
            .catch((err) => console.log(err));
    }, [open]);

    const clickOnCard = (e) => setOpen(true);

    const handleSaved = () => {
        Api.get(`/user/${decodedToken.username}/recipes/`, {
            headers: {
                Authorization: BearerToken,
            },
        })
            .then((res) => setSavedRecipes(res.data.favorites))
            .catch((err) => console.log(err))
            .finally(() => setOnSaved(!onSaved));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <>
                <Container>
                    <div className="buttonsDiv">
                        <button
                            onClick={() => {
                                setButtonfilter("savedRecipes")
                                setOnSaved(false)
                            }}
                            className="button"
                        >
                            Minhas Receitas
                        </button>

                        <button
                            onClick={() => {
                                setButtonfilter("userRecipes")
                                setOnSaved(true)
                            }}
                            className="button"
                        >
                            Receitas Salvas
                        </button>
                    </div>

                    <div className="dashboardContent">
                        {buttonfilter === "userRecipes" ? (
                            <UserRecipes onClick={clickOnCard} />
                        ) : null}
                        {buttonfilter === "savedRecipes" ? (
                            <UserSavedRecipes onClick={handleSaved} />
                        ) : null}
                        {!onSaved
                            ? myRecipes && myRecipes?.map((e) => (
                                <RecipeCard
                                    key={e.id}
                                    recipe={e}
                                    del
                                    setMyRecipes={setMyRecipes}
                                    myRecipes={myRecipes}
                                />
                            ))
                            : savedRecipes && savedRecipes?.map((e) => (
                                <RecipeCard
                                    key={e.id}
                                    recipe={e}
                                    del
                                    setMyRecipes={setMyRecipes}
                                    myRecipes={savedRecipes}
                                />
                            ))}
                    </div>
                </Container>
                <AddRecipeModal open={open} setOpen={setOpen} />
            </>
        </motion.div>
    );
}

export default DashBoard;
