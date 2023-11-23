import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Details() {

  return (
    <Container>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Clique-me" loading={false} color="blue" onClick={() => console.log("Clicado")} />

    </Container>   

  )
};