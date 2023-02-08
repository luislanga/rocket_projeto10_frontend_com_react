import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { BackButton } from "../../components/BackButton"
import { Link } from "react-router-dom"

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    type="text"
                />
                <Input 
                    placeholder="E-mail"
                    type="email"
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                />
                <Button
                    title="Cadastrar"
                    
                />

                <Link to="/">
                    <BackButton title="Voltar para o login" />
                </Link>



            </Form>
            <Background />
        </Container>
    )
}