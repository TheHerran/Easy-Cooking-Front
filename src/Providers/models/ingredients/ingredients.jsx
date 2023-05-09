import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api, BearerToken } from "../../../services/api";

export const IngredientsContext = createContext({});

export function IngredientsProvider({ children }) {
    const [ingredients, setIngredients] = useState(null);
    const [listIngredients, setListIngredients] = useState([]);

    // useEffect(() => {
    //   async function getIngredients() {
    //     await Api.get("/ingredientes")
    //       .then((res) => {
    //         setListIngredients(res.data);
    //       })
    //       .catch((err) => console.log(err));
    //   }
    //   getIngredients();
    // }, []);

    function ratingMax(user, element, rating) {
        const prevRev = element.reviews;
        prevRev.push({ userId: user.id, rating });
        const data = { reviews: prevRev };
        const { id } = element;
        Api.patch(`/recipe/${id}/`, data, {
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
        <IngredientsContext.Provider
            value={{ ingredients, listIngredients }}
        >
            {children}
        </IngredientsContext.Provider>
    );
}
