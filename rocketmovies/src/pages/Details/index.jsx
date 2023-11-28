import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Links, Content } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
     <Header/>
      <main>
        <Content>
         <ButtonText title="Excluir nota"/>
          <h1>Senhor dos anéis</h1>
          <p>Na Terra Média, no Condado onde vivem os hobbits, acontece o aniversário de Bilbo, que dá a seu sobrinho, Frodo Bolseiro, um misterioso anel. Logo, com a ajuda do mago Gandalf, o jovem descobre que a jóia é mágica e seus poderes podem ter conseqüências terríveis para quem usar e para o resto do mundo.</p>

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
    </Content>
   </main>
  </Container>   

  )
};