import {Container, Brand, Content} from './styles'
import {Header} from '../../components/Header'
import { Button } from '../../components/Button'
import {FiPlus} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import { Input } from '../../components/Input'
import { Section } from "../../components/Section"
import { Note } from '../../components/Note'


 
export function Home(){
    return (
        <Container>        
            <Header />

            <div class="inputArea">
            <Input 
            placeholder="Procure um filme" 
            />
            </div>
            <Brand>
            <h1>Meus Filmes</h1>
            
         <Link to='/createMovies'><Button icon ={FiPlus} title="Adicionar filme"> </Button> </Link>
            </Brand>
        <Content>
        <Section title="">
          <Note 
          data={{
            title: "Senhor dos anéis",
            description: "A história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anãos, Elfos, Ents e Hobbits - contra Orques, para evitar que o (Anel do Poder) volte às mãos de seu criador Sauron, o Senhor Sombrio.",
            tags: [
              {id: "1", name: "ação" },
              {id: "2", name: "aventura"}
            ]
            }}/>
          </Section>
        </Content>
            
            
        </Container>
    )

}