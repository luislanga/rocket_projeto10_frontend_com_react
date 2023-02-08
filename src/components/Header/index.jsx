import { Container, Profile, Logo } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <Logo>
                RocketMovies
            </Logo>
            <Input placeholder="Pesquisar pelo título"/>
            <Profile to="/profile">                
                
                    <div>
                    <strong>Luis Langa</strong>
                    <span>sair</span>
                    </div>
                
                    <img src="https://github.com/luislanga.png"/>
            </Profile>
        </Container>
    )
}