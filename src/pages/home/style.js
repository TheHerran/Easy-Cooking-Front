import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const Recipes  = styled.div`

    display: flex;
    flex-direction: row;   
    flex-wrap: nowrap; 
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2vw;
    gap: 3.2rem;
    width: 100%;
    overflow: auto;

    @media screen and (min-width: 700px) {
        flex-wrap: wrap;
        overflow: hidden;
        padding: 2rem 15vw;

    }
`;

