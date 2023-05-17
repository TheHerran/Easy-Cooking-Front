import styled from "styled-components";

export const StyledForm = styled.form`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vh;

    padding: 10px;

    width: 25vw;
    min-height: 40vh;
    
    border: none;

    span {
        font-size: 0.9rem;
        color: ${(props) => props.theme.button.background};

    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 7px;
        width: 90%;

    }

    input{
        
        border: none;
        background-color: transparent;

        width: 100%;
        height: 45px;

        padding: 9px;
        font-size: 15px;
    }

    label{
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.colorOne};
        margin-left: 10px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    @media(max-width: 567px){
        width: 90vw;

        div{
            gap: 2px;
        }

        input{
            height: 45px;
        }


    }


`

