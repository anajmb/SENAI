import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadNews from "./pages/CadNews";
import Sobre from "./pages/Sobre";
import Header from "./Components/Header";



const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadNews />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
