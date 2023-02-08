import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    p{
        text-align: justify;
    }

    .detailsTitle{
        margin-top:24px;
        display: flex;
        align-items: center;
        gap: 19px;

        h2{
            font-size:36px;
            font-weight: 500;
            line-height: 47px;
        }
    }

    .detailsAuthor{

        display: flex;
        align-items: center;
        gap: 14px;
        margin: 24px 0 40px;

        img{
            height: 16px;
            width: 16px;
            border-radius:50%;
            margin-right: 8px;
        }

        div{
            display: flex;
            align-items: center
        }
    }

    .tags{
        display: flex;
        justify-content: start;
        gap: 8px;
        margin-bottom: 40px;
    }

`



