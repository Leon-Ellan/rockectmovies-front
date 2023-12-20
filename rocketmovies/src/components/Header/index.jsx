import { Container, Profile } from "./styles";

export function Header() {

  return (
    <Container>
        <div className="logo">
          <h1>RocketMovies</h1>
        </div>
      <Profile to="/profile">
        <img 
        src="https://github.com/leon-ellan.png" 
        alt="foto do usuário" />
      <div>
        <strong>Leon Ellan</strong>
        <span>sair</span>
      </div>
      </Profile>
    </Container>
  )
}