import styled from "styled-components";

export const MainPage = styled.div`
width: 100vw;
height: 100vh;
background-color: ${(props) => props.theme.background};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12vw;
box-shadow: 0px -22px 86px 10px rgba(0,0,0,0.4) inset;

padding: 10vw;

.view {
    cursor: pointer;
    width: 25px;
    height: 25px;
}

.iconInputs {
    color: ${(props) => props.theme.colorIcon}
}

form {
    width: 90%;
    margin: 0 auto;
    max-width: 400px;
    border-radius: 10px;

    input {
        color: ${(props) => props.theme.colorOne};
        ::placeholder{
            font-size: 10pt;
        }
    }

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
    
    h4 {
        font-weight: 300;
    }
}

.logoDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;

    figure {
        width: 70%;
        align-self: center;

        img {
            width: 100%;

        }
    }

    p {
        font-size: 17pt;
        width: 70%;
    }
    
}

.red {
    font-size: 17pt;
    color: ${(props) => props.theme.button.backgroundColor}
}

.divForm {
    width: 90vw;
}

p {
    margin-top: 80px;
    margin-left: 20px;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colorOne};
    display: none;
}

h2 {
    color: ${props => props.theme.title};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h4 {
    color: ${(props) => props.theme.colorOne};
}

img {
    width: 70%;
    cursor: pointer;
    
}

.redSpan {
    color: ${(props) => props.theme.button.backgroundColor};
    font-size: 0.9rem;
}

.link {
    font-size: 1rem;
    color: ${props => props.theme.title};

    cursor: pointer;
}

@media( min-width: 500px ){
    flex-direction: row;
    p {
        display: block;
    }

    .divForm {
        width: 50vw;
    }

    .logoDiv {
    width: 30vw;

    figure {
        align-self: flex-start;

        img {
            width: 100%;
        }
    }
}
}
`