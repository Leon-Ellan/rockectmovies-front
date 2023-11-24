import { Container, Profile } from "./styles";

export function Header() {

  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/leon-ellan.png" 
        alt="foto do usuário" />
      <div>
        <span>Bem-vindo</span>
        <strong>Leon Ellan</strong>
      </div>
      </Profile>
    </Container>
  )
}