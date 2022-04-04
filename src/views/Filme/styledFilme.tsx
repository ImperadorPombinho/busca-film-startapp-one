import styled from "styled-components";


export const BoxInformaFilme = styled.div`
    background-color: inherit;
    padding: 3%;
    width: 95%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        height: 50%;
        width: 100%;
        padding-top: 20%;
    }
    @media only screen and (max-height: 400px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        height: 50%;
        width: 100%;
        padding-top: 25%;
    }
`;
export const BoxTagLineFilme = styled.div`
    background-color: inherit;
    width: 100%;
    height: 10.5%;
    margin-top: 2.4%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const BoxOverviewFilme = styled.div`
    width: 100%;
    background-color: inherit;
    padding-top: 5%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        height: 95%;
        padding-top: 5%;
    }
    @media only screen and (max-height: 600px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        padding-top: 10%;
    }

`;
export const BoxListCompanies = styled.div`
    width: 100%;
    background-color: inherit;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        height: 95%;
        padding-top: 15%;
        
    }
    @media only screen and(max-height: 500px) {
        padding-top: 15%;
    }
    @media only screen and (max-height: 380px){
        margin-top: 10%;
        
        
    }

`;