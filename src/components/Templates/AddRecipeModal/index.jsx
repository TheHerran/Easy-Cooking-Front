import { style, BoxStyled, AutoStyled, SelectStyled, TextFieldStyled, } from "./style";
import { Checkbox, Modal } from "@mui/material";
import { useContext } from "react";
import { IngredientsContext } from "../../../Providers/models/ingredients/ingredients";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { Api, BearerToken } from "../../../services/api";
import { toast } from "react-toastify";

export const AddRecipeModal = ({ open, setOpen }) => {
    const { listIngredients } = useContext(IngredientsContext);
    const [ingredientSave, setIngredientSave] = useState([]);
    const [autocompleteValue, setAutocompleteValue] = useState(null);
    const [autocomplete, setAutocomplete] = useState("");
    const [unity, setUnity] = useState("Selecione");
    const [quanti, setQuanti] = useState(0);
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        const username = sessionStorage.getItem("@Easy:Username")

        Api.get(`/accounts/${username}`, {
            headers: {
                Authorization: BearerToken
            }
        })
            .then(resp => setDataUser(resp.data))
            .catch(err => console.log(err))
    }, [])

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const formSchema = yup.object().shape({
        title: yup.string().required("Digite um nome"),
        category: yup.string(),
        img: yup.string().required("Coloque uma imagem"),
        preparation: yup.string().required("Conte-nos o modo de preparo"),
    });

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });


    function addIngredient(e) {
        e.preventDefault()
        const obj = { name: autocompleteValue, quantity: quanti, unit: unity }
        if (obj.name !== null && obj.quantity > 0 && obj.unit !== "Selecione") {
            setIngredientSave([...ingredientSave, obj])
            setAutocompleteValue(null)
            setQuanti([0])
            setUnity("Selecione")
        } else {
            toast.error("Verifique as informações de ingrediente")
        }


    }

    function onSubmitFunction(data) {
        if (data.category === "Selecione") {
            return toast.error("Por favor, selecione uma categoria!")
        }

        // data.reviews = []
        // // data.ingredients = ingredientSave
        // data.userName = dataUser.username
        // data.userId = dataUser.id

        toast.promise(Api.post("/recipe/", data, {
            headers: {
                Authorization: BearerToken
            }
        }), {
            pending: {
                render() {
                    return "Criando";
                },
            },
            success: {
                render() {
                    return "Receita criada com sucesso!";
                },
                icon: "🍝",
            },
            error: "Não foi possível criar, verifique as informações!",
        })
            .then(resp => resp)
            .catch(err => err)
            .finally(() => {
                // setIngredientSave([])
                setOpen(!open)
                setValue("title", "")
                setValue("preparation", "")
                setValue("category", "")
                setValue("img", "")
                setValue("ingredients", "")
            })

    }

    return (
        <Modal open={open} onClose={() => setOpen(!open)}>
            <BoxStyled sx={style}>

                <div className="div">
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
                <div className="div">
                    <label>Ingredientes {errors.ingredients && <span className="labelError"> - {errors.ingredients.message}</span>}</label>
                    <textarea
                        type="text"
                        placeholder="Digite aqui os ingredientes"
                        {...register("ingredients")}
                    />
                </div>
                <div className="div">
                    <label>Modo de Preparo {errors.preparation && <span className="labelError"> - {errors.preparation.message}</span>}</label>
                    <textarea
                        type="text"
                        placeholder="Digite aqui o modo de preparo"
                        {...register("preparation")}
                    />
                </div>

                <form className="divIngre" onSubmit={handleSubmit(onSubmitFunction)}>
                    <AutoStyled
                        value={autocompleteValue}
                        onChange={(event, newValue) => {
                            setAutocompleteValue(newValue);
                        }}
                        inputValue={autocomplete}
                        onInputChange={(event, newInputValue) => {
                            setAutocomplete(newInputValue);
                        }}

                        options={listIngredients}

                        getOptionLabel={(option) => {
                            return option || "";
                        }}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option}
                            </li>
                        )}
                        style={{}}
                        renderInput={(params) => (
                            <TextFieldStyled
                                variant="outlined"
                                id="checkboxesIngredients"
                                {...params}
                                label="Ingredientes"
                                placeholder="Escolha aqui"
                            />
                        )}
                    />
                    <SelectStyled
                        type="text"
                        value={unity}
                        onChange={(e) => setUnity(e.target.value)}
                    >
                        {/* <option value="Selecione">Selecione</option>
                        <option value="litros">Litros</option>
                        <option value="miliLitros">MiliLitros</option>
                        <option value="unidades">Unidades</option>
                        <option value="gramas">Gramas</option>
                        <option value="Kg">Kg</option>
                        <option value="colher de Sopa">Colher de Sopa</option>
                        <option value="colher de chá">Colher de chá</option>
                        <option value="xícara">Xícara</option>
                        <option value="folhas">Folhas</option>
                        <option value="A gosto">A gosto</option>
                        <option value="dentes">Dentes</option>
                        <option value="latas">Latas</option>
                        <option value="caixinhas">Caixinhas</option> */}
                    </SelectStyled>
                    <input value={quanti} type="number" min={0} max={1000} onChange={(e) => setQuanti(e.target.value)} />
                    <button className="butAdd" onClick={(e) => addIngredient(e)}>Adicionar</button>
                    <button type="submit" className="buttonSave">Salvar Receita</button>
                </form>
            </BoxStyled>
        </Modal>
    );
};
