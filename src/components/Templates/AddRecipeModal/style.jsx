import { Autocomplete, Box, TextField } from "@mui/material";
import styled from "styled-components";

export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
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

export const AutoStyled = styled(Autocomplete)`
  background-color: ${(props) => props.theme.colorHeader};
  border: none;
  border-radius: 35px;
  width: 43%;
  height: 45px;
  margin: 0 5px; 
  cursor: pointer;

  fieldset {
    border: none;
    width: 80%;
  }

  div {
    height: 45px;

    input {
      height: 45px;
    }
  }

  textarea {
    color: ${(props) => props.theme.colorOne};
    width: 50%;
    height: 45px;
  }

  label {
    color: ${(props) => props.theme.colorOne};
    width: 90%;
    height: 45px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SelectStyled = styled.textarea`
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
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    color: ${(props) => props.theme.colorOne};
  }

  .labelError {
    color: #ea1d2cff;
  }

  .ulIngredients{
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 25px;
    padding: 10px;
    list-style: none;
    flex-wrap: wrap;
    height: 100px;
    overflow: auto;
    background-color: ${(props) => props.theme.colorHeader};

    li {
      margin: 0 10px;
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
        font-weight: 700;
        color: ${(props) => props.theme.colorOne};
      }

      input, select {
        background-color: ${(props) => props.theme.colorHeader};
        color: ${(props) => props.theme.colorOne};
        border: none;
        border-radius: 35px;
        height: 45px;
        padding: 0 20px;
        width: 100%;
      }
    }
  }

  .divIngre {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;

    .butAdd {
      border: none;
      background-color: ${props => props.theme.button.backgroundColor};
      color: ${props => props.theme.button.textColor};
      height: 45px;
      width: 20%;
      border-radius: 35px;
      margin: 0 5px;
      
      :hover {
      transition: all 0.3s;
      filter: brightness(1.5);
      }
    }

    input {
      background-color: ${(props) => props.theme.colorHeader};
      color: ${(props) => props.theme.colorOne};

      border: none;
      border-radius: 35px;
      width: 20%;
      height: 45px;
      margin: 0 5px;
      padding: 0 10px;
    }
  }

  .div {
    display: flex;
    flex-direction: column;
    margin: 7px 0;
    width: 100%;

    label {
      margin-left: 20px;
      font-weight: 700;
      color: ${(props) => props.theme.colorOne};
    }

    input {
      background-color: ${(props) => props.theme.colorHeader};
      border: none;
      border-radius: 35px;
      height: 45px;
      padding: 0 20px;
    }

    textarea {
      background-color: ${(props) => props.theme.colorHeader};
      color: ${(props) => props.theme.colorOne};

      border: none;
      border-radius: 35px;
      height: 100px;
      padding: 20px;
    }
  }

  .buttonSave {
    border: none;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props => props.theme.button.textColor};
    height: 45px;
    width: 200px;
    border-radius: 35px;

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
`;
