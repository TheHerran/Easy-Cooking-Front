import { Form } from "../../components/Atoms/Form";
import { Page } from "./style";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { TbCookieOff } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import { Button } from "../../components/Atoms/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../Providers/models/user/user";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/CookNew.png";
import LogoV2Black from "../../assets/logoBlack-V2.svg";
import LogoWhite from "../../assets/logoWhite-V2.svg";
import { GlobalThemeContext } from "../../Providers/models/theme/theme";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ThemeSwitch from "../../components/Atoms/ThemeSwitch";

export default function LoginPage() {
    const [inputType, setInputType] = useState("password");
    const { loginUser, verify } = useContext(UserContext);
    const { currentTheme } =
        useContext(GlobalThemeContext);

    const navigate = useNavigate();

    const callBackNavigate = (page) => {
        navigate(page);
    };

    useEffect(() => {
        verify && callBackNavigate('/')

    }, [<LoginPage />])

    const formSchema = yup.object().shape({
        username: yup.string().required("Username obrigatório"),
        password: yup.string().required("Digite sua senha!"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onSubmitFunction({ username, password }) {
        loginUser(username, password, () => callBackNavigate("/"));
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Page>
                <div className="mainDiv">
                    <figure className="figLogo">
                        {currentTheme === "light" ? (
                            <img src={LogoV2Black} alt="Easy Cooking" />
                        ) : (
                            <img src={LogoWhite} alt="Easy Cooking" />
                        )}
                    </figure>

                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h1>Faça seu login</h1>

                        <div>
                            <label>
                                Username {errors.username && <span> - {errors.username.message}</span>}
                            </label>
                            <div>
                                <GiCook className="iconInputs" />
                                <input
                                    type="text"
                                    placeholder="Digite seu Username"
                                    {...register("username")}
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                Password{" "}
                                {errors.password && <span> - {errors.password.message}</span>}
                            </label>
                            <div>
                                <GiKnifeFork className="iconInputs" />
                                <input
                                    type={inputType}
                                    placeholder="Digite sua senha"
                                    {...register("password")}
                                />
                                {inputType === "password" ? (
                                    <TbCookieOff
                                        className="view iconInputs"
                                        onClick={() => setInputType("text")}
                                    />
                                ) : (
                                    <TbCookie
                                        className="view iconInputs"
                                        onClick={() => setInputType("password")}
                                    />
                                )}
                            </div>
                        </div>

                        <Button type="submit">Login</Button>

                        <h4>
                            Cadasatre-se{" "}
                            <span
                                className="link"
                                onClick={() => callBackNavigate("/cadastro")}
                            >
                                aqui
                            </span>{" "}
                            ou navegue{" "}
                            <span className="link" onClick={() => callBackNavigate("/")}>
                                anônimamente
                            </span>
                        </h4>
                    </Form>
                </div>

                <figure className="figCook">
                    <img className="pic" src={loginImg} alt="Easy Cooking" />
                </figure>
                <ThemeSwitch />
            </Page>
        </motion.div>
    );
}
