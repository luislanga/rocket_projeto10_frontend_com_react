import styled from "styled-components";

export const Container = styled.section`
    grid-area: content;
    overflow-y: auto;
    margin: 40px 90px;
    padding: 0 10px;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent
    }
 

    ::-webkit-scrollbar-thumb {
        background: ${({theme})=>theme.COLORS.PINK}; 
        border-radius: 4px
    }

    .homeTitle{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 35px;
        
        h1{
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
        }

        button{
            width: 210px;

        }

    }

`