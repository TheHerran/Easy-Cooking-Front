import { useContext } from "react";
import { useState, useEffect } from "react";
import { RecipesContext } from "../../../Providers/models/recipes/recipes";
import { FilterBarContainer } from "./style";

export const FilterBar = () => {
    const [search, setSearch] = useState("");
    const { searchRecipesTitle, setSearchOn, tagFilter } = useContext(RecipesContext);

    useEffect(() => {
        setTimeout(() => {
            searchRecipesTitle(search)
        }, 1500)
    }, [search])

    const handleSearch = (e) => {
        if (e === "") {
            setSearchOn(false);
            setSearch(e);
        } else setSearch(e);
    };

    const handleSubmit = () => {
        return searchRecipesTitle(search)
    };

    return (
        <>
            <FilterBarContainer>
                <div className="filterBar">
                    <div className="divInput">
                        <input
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            type="text"
                            placeholder="Pesquise o nome de sua receita"
                        />

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            Pesquisar
                        </button>
                    </div>
                </div>
                <div className="filterButtons">
                    <button onClick={(e) => tagFilter(e.target.innerText)} id="B0">
                        Todas
                    </button>
                    <button onClick={(e) => tagFilter(e.target.innerText)} id="B1">
                        Lanches
                    </button>
                    <button onClick={(e) => tagFilter(e.target.innerText)} id="B2">
                        Prato Principal
                    </button>
                    <button onClick={(e) => tagFilter(e.target.innerText)} id="B3">
                        Sobremesas
                    </button>
                    <button onClick={(e) => tagFilter(e.target.innerText)} id="B4">
                        Bebidas
                    </button>
                </div>
            </FilterBarContainer>
        </>
    );
};

export default FilterBar;
