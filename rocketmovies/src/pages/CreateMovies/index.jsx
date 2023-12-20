import {Container, Form} from './styles'
import {Header} from '../../components/Header';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

export function CreateMovies(){
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <Link to="/"> <FiArrowLeft />Voltar </Link>
            <h1>Novo Filme</h1>
          </header>
          <div class="sidebyside">
            <Input 
            placeholder="Titulo"
            /> 
            <Input 
            placeholder="Sua nota de 1 a 5"
            type="number"
            />
          </div>
          <Textarea
            placeholder="Observações"
          />
          <Section title="Marcadores">
            <div class="tags">                 
              <NoteItem value="Ação"/>
              <NoteItem isNew 
              placeholder ="Novo marcador"
              
              />
            </div>
          </Section>
        </Form>
      </main>
    </Container>
  )
}