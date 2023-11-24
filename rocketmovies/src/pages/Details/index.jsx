import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Links } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
     <Header/>
       <ButtonText 
         title="Excluir nota"
       />
       <Section title="Links úteis"> 
        <Links>
         
           <li><a href="#" target="_blank">link.1</a>
           </li>
           <li><a href="#" target="_blank">link.2</a>
           </li>
          
        </Links>
       </Section>
      <Section title="Marcadores"> 
        <Tag title="Ação"/>
        <Tag title="Aventura"/>

      </Section>
      <Button title="Voltar"/>
    </Container>   

  )
};