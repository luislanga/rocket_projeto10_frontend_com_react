import styled from "styled-components"

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    color: ${({theme}) => theme.COLORS.WHITE};

    height: 30px;
    border-radius: 8px;
    padding: 8px 16px;

    font-size: 12px;

`