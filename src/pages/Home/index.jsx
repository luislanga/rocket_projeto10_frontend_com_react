import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Home(){
    return(
        <Container>
            <Header />
            <Section>
            <div className="homeTitle">
                <h1>Meus filmes</h1>
                <Link to="/new">
                    <Button title="Adicionar filme" />
                </Link>
            </div>
                <Card />
                <Card />
                <Card />
                <Card />
            </Section>
        </Container>
    )
}