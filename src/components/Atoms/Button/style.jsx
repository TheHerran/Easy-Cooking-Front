import styled from "styled-components";

export const StyledButton = styled.button`
  width: 82%;
  height: 45px;

  border: none;
  border-radius: 40px;

  font-size: 1rem;
  color: ${(props) => props.theme.button.textColor};
  background-color: ${(props) => props.theme.button.backgroundColor};

  margin: 10px 0;
  width: 90%;

  :hover {
    filter: brightness(1.3);
    transition: 0.3s;
  }

  @media (max-width: 567px) {
    height: 45px;
  }
`;
