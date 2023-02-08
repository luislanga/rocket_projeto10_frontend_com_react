import { Container } from "./styles";

export function Input({placeholder, type}){
    return(
        <Container 
        placeholder={placeholder}
        type={type} />
    )
}