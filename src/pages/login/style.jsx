import styled from "styled-components";
import { GlobalThemeContext } from "../../Providers/models/theme/theme";
import { useContext } from "react";

function Switch() {
  const { currentTheme } = useContext(GlobalThemeContext);
  return currentTheme;
}

export const ObjFormControl = {
  position: "absolute",
  top: 0,
  right: 0,
};

export const ObjSwitch = {
  margin: "10px 20px 5px 10px",
  width: 40,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0.1,
    margin: 0.1,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: Switch === "dark" ? "#800000" : "#800000",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#800000",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: Switch === "light" ? "gray" : "gray",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: Switch === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: Switch === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
  },
};

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColorOne};

  display: flex;
  flex-direction: row;

  input {
    color: ${(props) => props.theme.colorOne};
    ::placeholder {
      font-size: 10pt;
    }
  }

  button {
    height: 45px;
    width: 90%;
  }

  .iconInputs {
    color: ${(props) => props.theme.colorIcon};
  }

  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .view {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  h4 {
    font-weight: 300;
  }

  form {
    width: 100%;
    height: 70%;
    max-width: 390px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;

    div {
      margin-top: 25px 0;
      color: ${(props) => props.theme.button.colorOne};
      width: 90%;
      margin: 0 auto;

      div {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        padding: 0 10px;
        background-color: ${(props) => props.theme.inputColor};
        border-radius: 40px;

        padding: 0 20px;

        svg {
          width: 21px;
          height: 21px;
          color: #0000009b;
        }
      }
    }
  }

  .figLogo {
    width: 60%;
    height: 20%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-left: 50px;

    background-color: ${(props) => props.theme.background};
  }

  figure img {
    width: 60%;
    height: 100%;
    max-width: 400px;
  }

  .figCook {
    width: 580px;
    height: 580px;
    border-radius: 50px;
    margin: auto;
    display: none;
  }

  .pic {
    width: 100%;
    border-radius: 50px;
  }

  .link {
    cursor: pointer;

    font-size: 1rem;
    color: ${(props) => props.theme.title};
  }

  @media (min-width: 700px) {
     .figCook {
        display: block;
     }
     .mainDiv {
        width: 50%;
     }
  }
`;
