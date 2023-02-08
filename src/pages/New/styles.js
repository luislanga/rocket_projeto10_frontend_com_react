import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
`

export const Form = styled.form`
    margin: 40px 100px 85px;

    h1{
        margin: 24px 0 40px;
    }
    
    .titleRating{
        display: flex;
        gap: 40px;
        margin-bottom:40px;
    }

    .buttonContainer{
        display: flex;
        gap: 40px;
    }
    
`