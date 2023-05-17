import { Box, TextField } from "@mui/material";
import styled from "styled-components";

export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "45vw",
    boxShadow: 24,
    p: 4,
};

export const TextFieldStyled = styled(TextField)`
    margin: 0!important;
    padding: 0!important;
    width: 100%;
    
    div {
        padding: 0!important;
        margin: 0!important;

        input {
            margin: 0!important;
            padding: 0 0 0 10px!important;
        }
    }
`

export const SelectStyled = styled.select`
    background-color: ${(props) => props.theme.colorHeader};
    border: none;
    border-radius: 35px;
    width: 30%;
    height: 45px;
    margin: 0 5px; 
    padding: 0 10px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const BoxStyled = styled(Box)`
    background-color: ${(props) => props.theme.backgroundColorOne};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        color: ${(props) => props.theme.colorOne};
    }

    .labelError {
        color: ${(props) => props.theme.error};
    }

    .ulIngredients{
        display: flex;
        flex-direction: row;
        width: 100%;
        border-radius: 15px;
        padding: 10px;
        list-style: none;
        flex-wrap: wrap;
        height: 100px;
        overflow: auto;
        gap: 7px;
        background-color: ${(props) => props.theme.colorHeader};

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            height: 15px;
            border-radius: 25px;
            padding: 15px 8px;
            background-color: ${(props) => props.theme.ingItem};
            color: ${(props) => props.theme.colorOne};
        }

        .emptyIng{
            width: inherit;
            margin: auto;
            text-align: center;
            font-size: 1.5rem;
            color: ${(props) => props.theme.ingItem};
        }
  }

    .catImg {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        div {
            width: 49%;
            display: flex;
            flex-direction: column;
            margin: 7px 0;

        label {
            margin-left: 20px;
            padding: 5px 0;
            font-weight: 700;
            color: ${(props) => props.theme.colorOne};
        }

        input, select {
            background-color: ${(props) => props.theme.colorHeader};
            color: ${(props) => props.theme.colorOne};
            border: none;
            border-radius: 15px;
            height: 45px;
            padding: 0 20px;
            width: 100%;
        }
        }
    }

    .divIngre {
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 180px;
        gap: 20px;

    .butAdd {
        border: none;
        background-color: ${props => props.theme.button.backgroundColor};
        color: ${props => props.theme.button.textColor};
        height: 45px;
        width: 30%;
        border-radius: 15px;
        margin: 0 5px;
        align-self: end;
      
        :hover {
            transition: all 0.3s;
            filter: brightness(1.5);
        }
    }

    input {
        background-color: ${(props) => props.theme.colorHeader};
        color: ${(props) => props.theme.colorOne};
        border: none;
        border-radius: 15px;
        width: 20%;
        height: 45px;
        margin: 0 5px;
        padding: 0 10px;
    }
  }

    .divInput {
        display: flex;
        flex-direction: column;
        margin: 7px 0;
        width: 100%;
        

    label {
        margin-left: 20px;
        padding: 5px 0;
        font-weight: 700;
        color: ${(props) => props.theme.colorOne};
    }

    input {
        background-color: ${(props) => props.theme.colorHeader};
        border: none;
        border-radius: 15px;
        height: 45px;
        padding: 0 20px;
    }

    textarea {
        background-color: ${(props) => props.theme.colorHeader};
        color: ${(props) => props.theme.colorOne};
        border: none;
        border-radius: 15px;
        height: 100px;
        padding: 20px;
    }
  }

    .divList {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    
        .addInput {
            width: 100%;
            padding-top: 20px;
            display: flex;

            .divAddInput {
                width: 70%;
            }
        }

        label {
            margin-left: 20px;
            padding: 5px 0;
            font-weight: 700;
            color: ${(props) => props.theme.colorOne};
        }

        input {
            background-color: ${(props) => props.theme.colorHeader};
            border: none;
            border-radius: 15px;
            height: 45px;
            padding: 0 20px;
            width: 95%;
        }
  }

    .buttonSave {
        border: none;
        background-color: ${props => props.theme.button.backgroundColor};
        color: ${props => props.theme.button.textColor};
        height: 45px;
        width: 28%;
        border-radius: 15px;
        align-self: end;

    :hover {
        transition: all 0.3s;
        filter: brightness(1.5);
    }
  }

    @media (max-width: 700px) {
        overflow-y: auto;
        max-height: 100vh;
        
        form {
            display: flex;
            flex-direction: column;
            gap: 5px;
            min-height: 250px;

        input {
            min-width: 100%;
        }

        button {
            min-width: 100%;
        }
        ul {
            flex-wrap: nowrap;
        }
        .catImg {
            flex-direction: column;
            div {
                width: 100%;
            }
        }
        }
}
`
