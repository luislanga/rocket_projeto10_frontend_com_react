import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex; 
    align-items: stretch;
    flex: 635px auto;

    h1{
        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINK}
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
        
        margin-bottom: 48px;
    }

    h2{
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 48px;
    }

    a{
        color: ${({theme}) => theme.COLORS.PINK};
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 136px;
    
    >input{
         margin-bottom: 8px;
    }

    button{
        margin-bottom: 42px
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
    opacity: 0.65;
`