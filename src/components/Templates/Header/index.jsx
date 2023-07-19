import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalThemeContext } from "../../../Providers/models/theme/theme";
import { UserContext } from "../../../Providers/models/user/user";
import LogoBlack from "../../../assets/logoBlack-V2.svg";
import LogoWhite from "../../../assets/logoWhite-V2.svg";
import ProfileMenu from "../../Atoms/ProfileMenu";
import ThemeSwitch from "../../Atoms/ThemeSwitch";
import { UserModal } from "../../Atoms/UserModal";
import { HeaderContainer } from "./style";

function Header() {
    const { currentTheme } = useContext(GlobalThemeContext);
    const { isOpen, setIsOpen, verify } = useContext(UserContext);
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/");

    return (
        <>
            <HeaderContainer>
                <img
                    className="imgLogo"
                    onClick={() => handleNavigate()}
                    src={currentTheme === "dark" ? LogoWhite : LogoBlack}
                    alt="Easy Cooking"
                />

                {verify ? (
                    <>
                        <ProfileMenu />
                    </>
                ) : (
                    <div className="divButtons">
                        <button onClick={() => navigate("/login")}>Fazer Login</button>
                        <button onClick={() => navigate("/cadastro")}>Cadastrar</button>
                    </div>
                )}

                <UserModal state={isOpen} setState={setIsOpen} />
                <ThemeSwitch />
            </HeaderContainer>
            <Outlet />
        </>
    );
};

export default Header