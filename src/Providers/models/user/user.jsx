import jwt_decode from 'jwt-decode';
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api, BearerToken } from "../../../services/api";

export const UserContext = createContext([]);

export function UserProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const [verify, setVerify] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("@Easy:Token") || null);
    const decodedToken = jwt_decode(token)
    const currentTime = Math.floor(Date.now() / 1000)
    
    useEffect(() => {
        if (token && decodedToken.exp > currentTime) {
            Api.get(`/profile/${decodedToken.user_id}/`, {
                headers: {
                    Authorization: BearerToken,
                },
            })
                .then((res) => {
                    setVerify(true)
                    setUser(res.data)
                })
                .catch((err) => err);
        }
    }, []);

    async function createUser(email, password, username, callback) {
        const data = { email, password, username };

        toast
            .promise(Api.post("/accounts/", data), {
                pending: {
                    render() {
                        return "Organizando a cozinha";
                    },
                },
                success: {
                    render() {
                        return "Tômperos adicionados, cozinha pronta!";
                    },
                    icon: "🍴",
                },
                error: "Vergonha da profissón, verifique seus dados!",
            })
            .then((response) => {
                setRegister(true);
            })
            .catch((err) => {
                console.log(err);
            });
        if (callback) {
            callback(register);
        }
    }

    async function loginUser(username, password, callback) {
        const data = { username, password };
        
        toast
            .promise(Api.post("/login/", data), {
                pending: {
                    render() {
                        return "Preparando a cozinha!";
                    },
                },
                success: {
                    render() {
                        return "Voilá";
                    },
                    icon: "👨🏻‍🍳",
                },
                error: "Não conseguimos abrir a cozinha, verifique seus dados!",
            })
            .then((response) => {
                setUser(response.data.access);
                setLogin(true);
                setVerify(true);
                setToken(response.data.access);
                
                localStorage.setItem("@Easy:Token", response.data.access);

                if (callback) {
                    callback(login);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function logoutUser(callback) {
        localStorage.removeItem("@Easy:Token")
        setUser(null);
        setToken(null);
        callback("/login");
    }

    function saveRecipe(data) {
        const fav = { favorites: data };
        Api.patch(`/accounts/${decodedToken.user_id}`, fav, {
            headers: {
                Authorization: BearerToken,
            },
        })
            .then((e) => console.log(e))
            .catch((e) => console.log(e));
    }

    function isLoggedinForDashboard(navigate) {
        verify
            ? navigate("/dashboard")
            : toast.error(
                "Faça login para acessar suas receitas",
                navigate("/login")
            );
    }

    return (
        <UserContext.Provider
            value={{
                user,
                decodedToken,
                token,
                loginUser,
                createUser,
                logoutUser,
                isLoggedinForDashboard,
                verify,
                isOpen,
                setIsOpen,
                saveRecipe,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
