import { Link } from 'react-router-dom';

import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { ButtonText } from '../../components/ButtonText'

export function New() {
  return (
    <Container>
      <Header/>
      <main>
      <Form>
      <header>
        <h1>Criar nota</h1>
         <Link to="/">
          Voltar
        </Link>
      </header>
      <Input 
       placeholder="Título"
      />
      <Textarea 
       placeholder="Observações"          
      />

    <Section title="Marcadores">
      <div className="tags">
        <NoteItem value="ação"/>
        <NoteItem isNew placeholder="Novo Marcador"/>

      </div>
    </Section>
    <Button 
      title="Salvar" 
    /> 
      </Form>

      </main>
    </Container>
  )
}