import { style, BoxStyled, SelectStyled } from "./style";
import { Modal } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api, BearerToken } from "../../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../../Providers/models/user/user";
import ClearIcon from '@mui/icons-material/Clear';

export const AddRecipeModal = ({ open, setOpen }) => {
    const { user } = useContext(UserContext);
    const [ingredientList, setIngredientList] = useState([]);
    const [addIngredientInput, setAddIngredientInput] = useState("");

    const formSchema = yup.object().shape({
        title: yup.string().required("Digite um nome"),
        category: yup.string(),
        img: yup.string().required("Coloque uma imagem"),
        preparation: yup.string().required("Conte-nos o modo de preparo"),
    });

    const { register, setValue, handleSubmit,
        formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });

    const addIngredient = (e) => {
        setIngredientList([...ingredientList, { item: addIngredientInput }])
        setAddIngredientInput("")
    }

    const removeIngredient = (item) => {
        setIngredientList(ingredientList.filter((index) => index !== item))
    }

    const onSubmitFunction = (data) => {
        if (data.category === "Selecione") {
            return toast.error("Por favor, selecione uma categoria!")
        }
        if (ingredientList.length === 0) {
            return toast.error("Por favor, adicione ao menos 1 ingrediente!")
        }

        const fullData = { ...data, ingredients: ingredientList }

        toast.promise(Api.post("/recipe/", fullData, {
            headers: { Authorization: BearerToken }
        }),
            {
                pending: { render() { return "Criando"; } },
                success: { render() { return "Receita criada com sucesso!"; }, icon: "🍝" },
                error: "Não foi possível criar, verifique as informações!"
            })
            .then(resp => resp)
            .catch(err => err)
            .finally(() => {
                setIngredientList([])
                setOpen(!open)
                setValue("title", "")
                setValue("preparation", "")
                setValue("category", "Não informado")
                setValue("img", "")
            })
    }

    return (
        <Modal open={open} onClose={() => setOpen(!open)}>
            <BoxStyled sx={style}>
                <div className="divInput">
                    <label>Nome {errors.title && <span className="labelError"> - {errors.title.message}</span>}</label>
                    <input
                        type="text"
                        placeholder="Digite aqui o nome da receita"
                        {...register("title")}
                    />
                </div>
                <div className="catImg">
                    <div>
                        <label>Categoria {errors.category && <span className="labelError"> - {errors.category.message}</span>}</label>
                        <SelectStyled {...register("category")}>
                            <option value="Não informado">Selecione</option>
                            <option value="Prato Principal">Prato Principal</option>
                            <option value="Sobremesas">Sobremesas</option>
                            <option value="Lanches">Lanches</option>
                            <option value="Bebidas">Bebidas</option>
                        </SelectStyled>
                    </div>
                    <div>
                        <label>Link da imagem {errors.image && <span className="labelError"> - {errors.img.message}</span>}</label>
                        <input
                            type="text"
                            placeholder="Coloque aqui o link da imagem"
                            {...register("img")}
                        />
                    </div>
                </div>

                <div className="divInput">
                    <label>
                        Modo de Preparo {errors.preparation && <span className="labelError"> - {errors.preparation.message}</span>}
                    </label>
                    <textarea
                        type="text"
                        placeholder="Digite aqui o modo de preparo"
                        {...register("preparation")}
                    />
                </div>

                <form className="divIngre" onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="divList">
                        <div className="addInput">
                            <div className="divAddInput">
                                <label>
                                    Ingredientes
                                </label>
                                <input
                                    type="text"
                                    value={addIngredientInput}
                                    placeholder='Exemplo: "2 colheres de margarina"'
                                    onChange={(e) => setAddIngredientInput(e.target.value)}
                                />
                            </div>
                            <button className="butAdd"
                                onClick={(e) => e.preventDefault(addIngredient(e))}>
                                Adicionar ingrediente
                            </button>
                        </div>
                        <ul className="ulIngredients">
                            {ingredientList.length === 0 ? (
                                <span className="emptyIng" >Nenhum ingrediente adicionado</span>
                            )
                                :
                                (ingredientList.map((element, index) => (
                                    <li key={index}>
                                        <span> {element.item} </span>

                                        <ClearIcon className="delItem"
                                            onClick={(e) => e.preventDefault(removeIngredient(element.item))} />
                                    </li>
                                )))
                            }
                        </ul>
                    </div>
                    <button type="submit" className="buttonSave">Salvar Receita</button>
                </form>
            </BoxStyled>
        </Modal>
    );
};
