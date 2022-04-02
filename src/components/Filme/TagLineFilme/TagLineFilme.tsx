import React from "react";
import { LinhaPreta } from "../styledComponentsFilme";
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
            
            <LinhaPreta />
        </>
    );
}
export default TagLineFilme;