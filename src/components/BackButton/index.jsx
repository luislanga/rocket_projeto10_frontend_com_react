import { Container } from "./styles"

export function BackButton({title}){
    return(
        <Container>
            <img src="src/assets/vector.svg" alt="" />
            <span>{title || "Voltar"}</span>
        </Container>
    )
}