import styled from "styled-components";

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    gap: 5vh;
    align-items: center;
`

export const NameRecipe = styled.div`
    width: 100vw;
    margin-top: 10px;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;

    .titleAndRating{
        display: flex;
        flex-direction: column;

        span {
            align-self: flex-end;
        }
    }
        
    .divBtn {
        display: flex;
        justify-content: space-between;

        button{
            display: flex;
            margin-top: 1vh;
            justify-content: space-around;
            width: 90px;
            background-color: ${props => props.theme.button.backgroundColor};
            color: ${props => props.theme.button.textColor};
            border: none;
            border-radius: 25px;
            padding: 10px;

            :hover{
                filter: brightness(1.3);
            }
    }
}
    @media screen and (min-width: 650px){
        padding: 0 15vw;
    }
`

export const RatingStyle = styled.span`
span {
    svg {
        color: ${props => props.theme.rating};
    }
}
`

export const ContentPage = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    width: 100vw;
    padding: 2vh 5vw 0 5vw;

    figure{
        width: 90vw;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        background-color: white;
        
        img{
            width: 100%;
            height: 100%;
            border-radius: 8px;
            border: 2px solid ${props => props.theme.orange} ;
        }
    }

    .divIngredients{
         display: flex;
         flex-direction: column;
         justify-content: space-around;

         h2{
            font-size: 1.5rem;
            color: ${props => props.theme.title};
            padding-bottom: 2vh;
         }

         ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            max-height: 50vh;
            overflow: auto;
            gap: 15px;
         }
    }

    .divImage{
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 700px) {
        flex-direction: row;

        figure {
            width: 40vw;
        }

        .divIngredients {
            justify-content: flex-start;

            h2 {
                padding-bottom: 5vh;
            }
        }
    }
`

export const Preparation = styled.div`
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2{
        padding-bottom: 2vh;
        color: ${props => props.theme.title};
    }

    p{
        display: block;
        font-size: 1.5rem;
        padding-bottom: 5vh;
    }

    @media screen and (min-width: 700px) {
        padding: 0 15vw;
    }

`