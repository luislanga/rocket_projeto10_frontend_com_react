import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    height: 275px;
    width: 100%;
    border: none;
    padding: 16px 19px;
    font-size: 14px;
    resize: none;

    &:placeholder{
        color: ${({theme}) => theme.COLORS.GRAY};
    }

`