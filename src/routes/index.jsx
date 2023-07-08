import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Home from "../pages/home";
import DashBoard from "../pages/dashboard";
import Header from "../components/Templates/Header";
import RecipePage from "../pages/recipePage";
import { AnimatePresence } from "framer-motion";

export default function RoutesApp() {
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/receita/:recipeId" element={<RecipePage />} />
            </Routes>
        </AnimatePresence>
    );
}
