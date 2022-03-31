import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filme from "./views/Filme/Filme";
import Home from "./views/Home/Home";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filmes/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;
