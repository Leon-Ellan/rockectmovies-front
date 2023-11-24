import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Links } from "./styles";
import { Section } from "../../components/Section";

export function Details() {

  return (
    <Container>
      <Header/>
      <Button title="Voltar"/>
      <Section title="Links úteis"> 
        <Links>
         
           <li><a href="#" target="_blank">link.1</a>
           </li>
           <li><a href="#" target="_blank">link.2</a>
           </li>
          
        </Links>
      </Section>
      <Section title="Marcadores"> 
      
      </Section>
    </Container>   

  )
};