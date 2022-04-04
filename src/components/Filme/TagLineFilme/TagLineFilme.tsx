import React from "react";
import { LinhaBranca } from "../styledComponentsFilme";
import { TagLine } from "./styledTagLine";

type Param = {
    tagline: string | null
}
const TagLineFilme = ({tagline}: Param) => {
    return(
        <>
            {
                tagline === null || tagline === "" ?
                <TagLine>Esse Filme não contém Slogan</TagLine> 
                :
                <TagLine>{tagline}</TagLine>
            }
            
            <LinhaBranca defaultValue={100} />
        </>
    );
}
export default TagLineFilme;