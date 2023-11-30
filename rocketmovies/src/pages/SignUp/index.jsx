import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Form , Background  } from "./styles";

export function SignUp() {
  return (
    <Container>
    <Background/>
    <Form>
      <h1>RocketNotes</h1>
      <p>Aplicação para salvar e genrenciar seus links úteis.</p>
      <h2>Crie sua Conta</h2>

      <Input
          placeholder="Nome"
          type='text'
          icon={FiUser}
        />
      <Input
          placeholder="E-mail"
          type='text'
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type='password'
          icon={FiLock}
        />
      <Button title="Cadastrar"/>

      <a href="#">Voltar para login</a>
    </Form>
  </Container>
)
}