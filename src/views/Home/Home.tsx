import React from "react";
import Busca from "../../components/Home/Busca/Busca";
import ListaFilm from "../../components/Home/ListaFilm/ListaFilm";
import Pagination from "../../components/Home/Pagination/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";
import {  ConfigView } from "./styledHome";

const Home = () => {
    return(
        <View>
            <NavBar />
            <ConfigView>
                <Busca />
                <Pagination />
                <ListaFilm />
            </ConfigView>
        </View>
    );
}

export default Home;