import styled from "styled-components";

export const FilterBarContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 140px;
    padding: 120px 0;
    background-color: ${(props) => props.theme.colorHeader};

.filterBar{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    width: 50%;
}

.divInput {
    background-color: ${(props) => props.theme.backgroundColorOne};
    display: flex;
    width: 90vw;
    flex-direction: row;
    justify-content: center;
    border: none;
    padding: 10px;
    border-radius: 35px;
}

.filterBar div select{
    height: 40px;
    width: 95px;
    border: none;
    border-radius: 35px;
    background-color: transparent;
    color: ${(props) => props.theme.colorOne};
    cursor: pointer;
}
.filterBar input{
    height: 40px;
    width: 50vw;
    border: none;
    background-color: transparent;
    padding-left: 10px;
    color: ${(props) => props.theme.colorOne};
    
    ::placeholder {
        color: ${(props) => props.theme.colorOne};
    }
}
.filterBar div button{
    border: none;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props => props.theme.button.textColor};
    height: 40px;
    width: 100px;
    border-radius: 35px;
}

.filterButtons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    margin-top: 30px;
    gap: 2vw;
}

.filterButtons button{
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 8px;
}

.filterButtons button:hover{
    filter: brightness(1.5)
}

#B0{
    border-radius: 35px;
    border: 2px solid ${props => props.theme.catFour};
    background-color: ${props => props.theme.backgroundColorOne};
    color: ${props => props.theme.colorIcon};
}

#B1{
    border-radius: 35px;
    background-color: ${(props) => props.theme.catOne};
}

#B2{
    background-color: ${(props) => props.theme.catTwo};
    border-radius: 35px;
}

#B3{
    background-color: ${(props) => props.theme.catTree};
    border-radius: 35px;
}

#B4{
    background-color: ${(props) => props.theme.catFour};
    border-radius: 35px;
}

@media screen and (min-width: 700px){

    .filterBar div select {
        width: 95px;
}

    .divInput {
        width: 60vw;
}

    .filterButtons {
        width: 50vw;
        gap: 1vw;
}

}
`;