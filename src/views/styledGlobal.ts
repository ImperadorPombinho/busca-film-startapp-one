import styled from "styled-components"

export const View = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #4D7388;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }

`;
export const DivScroll = styled.div`
    height: 100%;
    width: 100%;
    background-color: inherit;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`