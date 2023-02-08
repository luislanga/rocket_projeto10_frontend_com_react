import styled from "styled-components"

export const Container = styled.div`
    height: 225px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    margin-bottom: 24px;
    border-radius: 16px;
    padding: 32px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};


    p{
        color: ${({theme}) => theme.COLORS.GRAY};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    div{
        display: flex;
        gap: 8px;
        span{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }


`