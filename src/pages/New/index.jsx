import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagItem } from "../../components/TagItem";
import { Link } from "react-router-dom";



export function New(){
    return(
        <Container>
            <Header />
            <Form >
                <Link to="/">
                    <BackButton />
                </Link>
                <h1>Novo filme</h1>
                <div className="titleRating">
                    <Input placeholder="Título"/>
                    <Input placeholder="Nota (de 0 a 5)"/>
                </div>
                <Textarea />
                <h2>Marcadores</h2>
                <div className="tagContainer">
                    <TagItem value="alo" isNew={false}/>
                    <TagItem isNew={true}/> 
                </div>
                <div className="buttonContainer">
                    <Button title="Excluir filme" className="dark"/>
                    <Button title="Salvar alterações"/>
                </div>
                
            </Form>
        </Container>
    )
}