import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
                font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline:none
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline:none
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }

    .dark {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        color: ${({theme}) => theme.COLORS.PINK};

    }

    .tagContainer{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        border-radius: 8px;
        padding: 16px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }
    
`