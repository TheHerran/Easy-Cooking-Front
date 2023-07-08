import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { GlobalThemeContext } from '../../../Providers/models/theme/theme';
import { useContext } from 'react';
import { StyleIconButton, ThemeSwitchSpot } from './style';

function ThemeSwitch() {
    const { currentTheme, getOpositeTheme } =
        useContext(GlobalThemeContext);

    return (
        <ThemeSwitchSpot>
            <StyleIconButton onClick={() => getOpositeTheme()} size="large" >
                {currentTheme === "light" ?
                    <DarkModeIcon className="darkIcon" fontSize="inherit" />
                    :
                    <LightModeIcon className="lightIcon" fontSize="inherit" />
                }
            </StyleIconButton>
        </ThemeSwitchSpot>
    )
}

export default ThemeSwitch