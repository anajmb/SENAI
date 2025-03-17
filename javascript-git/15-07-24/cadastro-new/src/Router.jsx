import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadNews from "./pages/CadNews";
import Sobre from "./pages/Sobre";
import Lista from "./pages/lista";
import Header from "./Components/Header";




const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadNews />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/lista" element={<Lista />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
