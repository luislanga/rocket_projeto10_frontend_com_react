import styled from "styled-components";

export const Container = styled.input`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    height: 56px;
    width: 100%;
    border: none;
    padding: 0 24px;
    font-size: 14px;

    &:placeholder{
        color: ${({theme}) => theme.COLORS.GRAY};
    }

`