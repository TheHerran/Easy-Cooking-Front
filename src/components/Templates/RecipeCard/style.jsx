import styled from "styled-components";

export const RecipeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e6e6;
    background-color: ${(props) => props.theme.colorHeader};
    border-radius: 8px;
    border: none;
    width: 230px;
    height: 250px;
    padding: 15px;
    margin-bottom: 15px;
    justify-content: space-between;
    cursor: pointer;

    h1 {
        display: inline-block;
        width: 100%;
        padding: 1%;
    }

    figure {
        display: flex;
        flex-direction: column;
    }


    .imgFig {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        margin: 10px auto 0 auto;
    }
    img {
        width: 100%;
        height: 120px;
        border-radius: 5px;
    }
    .RecipeName {
        font-size: 11pt;
        width: 100%;
        text-align: left;
        font-weight: bold;
        margin: 0 auto;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
    }
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 85px;

    background-color: ${(props) =>
        props.lunch === "Sobremesa"
            ? props.theme.catTree
            : props.lunch === "Lanches"
                ? props.theme.catOne
                : props.lunch === "Prato Principal"
                    ? props.theme.catTwo
                    : props.theme.catFour};
    border: none;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;

    color: #121212;
    cursor: pointer;
`;

export const StyleRating = styled.span`
    span {
        svg {
            color: ${props => props.theme.rating};
        }
    }
`