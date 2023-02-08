import styled from "styled-components"

export const TagContainer = styled.div`
    height: 56px;
    padding: 16px;
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : `2px solid ${theme.COLORS.BACKGROUND_800}`};
    display: flex;
    border-radius: 10px;
    

    input{
        width: 100px;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    button{
        background-color: transparent;
        border: none;
    }

    svg{
        color: ${({theme}) => theme.COLORS.PINK}
    }
`