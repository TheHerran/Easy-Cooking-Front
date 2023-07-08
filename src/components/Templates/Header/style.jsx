import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    padding: 0 15vw;
    height: 120px;
    width: 100vw;
    background-color: ${props => props.theme.colorHeader};

    .imgLogo {
        width: 150px;
        height: 180px;
    }

    .divButtons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            border: none;
            background-color: ${props => props.theme.button.backgroundColor};
            color: white;
            height: 35px;
            width: 100px;
            border-radius: 35px;

            :hover {
                filter: brightness(1.4)
            }
        }
    }

    .figurePerfil {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65px;
        height: 65px;
        overflow: hidden;
        border-radius: 50%;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 650px){

        .divButtons {
            flex-direction: row;
        }
    }

`