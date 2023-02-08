import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 0 100px;

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    min-width:190px;

    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    >div {
        display:flex;
        flex-direction:column;
        margin-right: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY};
            text-align: end;
        }

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE} 
        }
    }
`

export const Logo = styled.div`
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
`