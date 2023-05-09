import { useContext } from 'react';
import { UserContext } from '../../../Providers/models/user/user';
import { DashBoardRecipesContainer, PlusAdd } from './style';

export const UserRecipes = ({ onClick }) => {
    const { verify } = useContext(UserContext)
    return (
        <DashBoardRecipesContainer onClick={onClick}>
            <PlusAdd />
        </DashBoardRecipesContainer>
    )
}

