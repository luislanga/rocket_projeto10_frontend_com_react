import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.header`
    height: 144px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    display:flex;
    align-items: center;
    padding: 0 144px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 340px;
    gap: 8px;
    
    >:nth-child(3){
        margin-bottom: 16px;
    }
`

export const Avatar = styled.div`
    position: relative;
    
    margin: -90px auto 32px;
    >img{        
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    >label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`