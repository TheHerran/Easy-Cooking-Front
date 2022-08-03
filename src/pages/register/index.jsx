import { Form } from "../../components/Atoms/Form";
import { MainPage } from "./style";
import { Button } from "../../components/Atoms/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/models/user/user";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { TbCookieOff } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GlobalThemeContext } from "../../Providers/models/theme/theme";
import LogoV2Black from "../../assets/logoBlack-V2.svg";
import LogoWhite from "../../assets/logoWhite-V2.svg";
import { FormControlLabel, Switch } from "@mui/material";
import { ObjFormControl, ObjSwitch } from "../login/style";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const { createUser } = useContext(UserContext);
  const { currentTheme, themeSwitch, getOpositeTheme } =
    useContext(GlobalThemeContext);
  const { verify } = useContext(UserContext);

  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .max(25, "Máximo 25 caracteres!")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Seu nome deve conter apenas letras!"
      ),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(8, "Mínimo 8 caracteres!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Pelo menos 1 número, 1 letra maiúcula, 1 letra minúscula e 1 caractere especial!"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submiting = ({ email, password, name }) => {
    createUser(email, password, name, async (e) => {
      const res = await e;
      handleNavigate("/login");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainPage>
        <div className="logoDiv">
          <figure>
            {currentTheme === "light" ? (
              <img src={LogoV2Black} alt="Easy Cooking" />
            ) : (
              <img src={LogoWhite} alt="Easy Cooking" />
            )}
          </figure>
          <p>
            Facilitando sua vida no dia a dia.
            <br />
            Guiando sua <span className="red">cozinha</span> com
            <br />
            <span className="red">harmonia</span>, <br />
            Pensado para <span className="red">você</span>!
          </p>
        </div>
        <div className="divForm">
          <Form onSubmit={handleSubmit(submiting)}>
            <h2>Cadastre-se</h2>
            <div>
              <label>
                Nome{" "}
                {errors.name && (
                  <span className="redSpan"> - {errors.name.message}</span>
                )}
              </label>

              <div>
                <GiCook className="iconInputs" />
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  {...register("name")}
                />
              </div>
            </div>

            <div>
              <label>
                E-mail{" "}
                {errors.email && (
                  <span className="redSpan"> - {errors.email.message}</span>
                )}
              </label>

              <div>
                <HiOutlineMail className="iconInputs" />
                <input
                  type="text"
                  placeholder="Digite seu melhor email"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <label>
                Senha{" "}
                {errors.password && (
                  <span className="redSpan"> - {errors.password.message}</span>
                )}
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

            <div>
              <label>
                Confirme a senha{" "}
                {errors.confirmPassword && (
                  <span className="redSpan">
                    {" "}
                    - {errors.confirmPassword.message}
                  </span>
                )}
              </label>

              <div>
                <GiKnifeFork className="iconInputs" />
                <input
                  type={inputType}
                  placeholder="Digite novamente sua senha"
                  {...register("confirmPassword")}
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

            <Button type="submit">Cadastrar</Button>
            <h4>
              Já tem cadastro? Faça login{" "}
              <span className="link" onClick={() => handleNavigate("/login")}>
                aqui
              </span>
            </h4>
          </Form>
        </div>
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
      </MainPage>
    </motion.div>
  );
}
