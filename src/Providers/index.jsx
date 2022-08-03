import { IngredientsProvider } from "./models/ingredients/ingredients";
import { RecipesProvider } from "./models/recipes/recipes";
import { GlobalTheme } from "./models/theme/theme";
import { UserProvider } from "./models/user/user";

export const GlobalProvider = ({ children }) => {
    return (
        <GlobalTheme>
            <UserProvider>
                <IngredientsProvider>
                    <RecipesProvider>
                        {children}
                    </RecipesProvider>
                </IngredientsProvider>
            </UserProvider>
        </GlobalTheme>
    );
};
