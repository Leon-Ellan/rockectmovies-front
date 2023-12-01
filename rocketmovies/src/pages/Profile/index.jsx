import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Profile(){
  return (
    <Container>
      <header>
        <button type="button">
          <FiArrowLeft size={24} />
        </button>
      </header>

      <Form>
        <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />
        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />
        <Input
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        />
        <Input
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
        />
        
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}