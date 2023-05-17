import { HeaderContainer } from "./style";
import LogoWhite from "../../../assets/logoWhite-V2.svg";
import LogoBlack from "../../../assets/logoBlack-V2.svg";
import { UserModal } from "../../Templates/UserModal";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import { ObjFormControl, ObjSwitch } from "../../../pages/login/style";
import { GlobalThemeContext } from "../../../Providers/models/theme/theme";
import { UserContext } from "../../../Providers/models/user/user";

export const Header = () => {

    const { currentTheme, themeSwitch, getOpositeTheme } =
        useContext(GlobalThemeContext);
    const { isOpen, setIsOpen, user } = useContext(UserContext);
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/");


    return (
        <>
            <HeaderContainer>
                <img
                    className="imgLogo"
                    onClick={() => handleNavigate()}
                    src={currentTheme === "dark" ? LogoWhite : LogoBlack}
                    alt=""
                />

                {user ? (
                    <figure className="figurePerfil" onMouseEnter={() => setIsOpen(true)}>
                        <img
                            className="imgPerfil"
                            src="https://static.vecteezy.com/ti/vetor-gratis/p3/364628-chef-avatar-ilustracao-gr%C3%A1tis-vetor.jpg"
                            alt=""
                        />
                    </figure>
                ) : (
                    <div className="divButtons">
                        <button onClick={() => navigate("/login")}>Fazer Login</button>
                        <button onClick={() => navigate("/cadastro")}>Cadastrar</button>
                    </div>
                )}

                <UserModal state={isOpen} setState={setIsOpen} />
                <FormControlLabel
                    sx={ObjFormControl}
                    value="end"
                    control={
                        <Switch
                            sx={ObjSwitch}
                            checked={themeSwitch}
                            onChange={() => getOpositeTheme()}
                        />
                    }
                    label="Tema"
                    labelPlacement="start"
                />
            </HeaderContainer>
            <Outlet />
        </>
    );
};
