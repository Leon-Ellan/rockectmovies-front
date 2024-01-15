import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import {FaStar} from 'react-icons/fa';
import { Link } from "react-router-dom"


export function Details() {

  return (
    <Container>
     <Header/>
      <main>
        <Content>
          <h1>Senhor dos anéis</h1> <FaStar size={20} />
          <p>Na Terra Média, no Condado onde vivem os hobbits, acontece o aniversário de Bilbo, que dá a seu sobrinho, Frodo Bolseiro, um misterioso anel. Logo, com a ajuda do mago Gandalf, o jovem descobre que a jóia é mágica e seus poderes podem ter conseqüências terríveis para quem usar e para o resto do mundo.</p>

       <Section> 
        <Tag title="Ação"/>
        <Tag title="Aventura"/>
       </Section>

       <Link to="/"> <Button title="Voltar"/></Link>

      
    </Content>
   </main>
  </Container>   

  )
};