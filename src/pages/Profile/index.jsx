import { Container, Header, Form, Avatar } from "./styles"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiCamera } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <Header>
                <Link to="/">
                    <BackButton />
                </Link>
            </Header>
            <Form>
                <Avatar>
                    <img src="https://github.com/luislanga.png" />
                
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar"
                            type="file"
                         />

                    </label>
                </Avatar>
                <Input placeholder="Nome"/>
                <Input placeholder="Email"/>
                <Input placeholder="Senha atual"/>
                <Input placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Form>

        </Container>
    )
}