import styled from "styled-components";

export const UserModalContainer = styled.div`
    position: absolute;
    z-index: 10;
    top: 100px;
    right: 15%;

    .UserModal{
        border-radius: 5px;
        width: 250px;
        height: 200px;
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background-color: ${(props) => props.theme.colorHeader};
        box-shadow: 0px 0px 10px 0px black;
        
    }
    
    .UserModalContent{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .UserModalContent button{
        width: 80%;
        height: 30px;
        border: none;
        border-radius: 25px;
        background-color: ${(props) => props.theme.button.backgroundColor};
        color: ${(props) => props.theme.button.textColor};
        margin: 10px 0;
    }

    .UserModalContent button:hover{
        transition: all .3s;
        filter: brightness(1.5);

    }
`;