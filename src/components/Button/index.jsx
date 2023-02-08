import { Container } from './styles'

export function Button({title, loading=false, className, ...rest}){
    return(
        <Container 
        type="button"
        disabled={loading}
        {...rest}
        className={className}
        >
           {loading ? "Carregando..." : title}
        </Container>
    )
}