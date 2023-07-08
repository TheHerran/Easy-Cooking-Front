import { DashBoardRecipesContainer, PlusAdd } from './style';

export const UserRecipes = ({ onClick }) => {
    return (
        <DashBoardRecipesContainer onClick={onClick}>
            <PlusAdd />
        </DashBoardRecipesContainer>
    )
}

