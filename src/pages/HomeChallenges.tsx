import { styled } from "styled-components";
import ChallengeCard from "../components/home-challenges/Card";

export const Container = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const Divider = styled.hr`
  width: 70%;
  height: 1px;
  background-color: #000;

  margin-bottom: 5rem;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

function HomeChallengesPage() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Desafios</h1>
          <h1>&</h1>
          <h1>Projetos</h1>
        </div>
      </Header>

      <Divider />

      <Section>
        <ChallengeCard image="https://www.github.com/pedropaulobrasca.png" title="Projetinho" description="teste" link="#"/>
        <ChallengeCard image="https://www.github.com/pedropaulobrasca.png" title="Projetinho" description="teste" link="#"/>
        <ChallengeCard image="https://www.github.com/pedropaulobrasca.png" title="Projetinho" description="teste" link="#"/>
        <ChallengeCard image="https://www.github.com/pedropaulobrasca.png" title="Projetinho" description="teste" link="#"/>
      </Section>
    </Container>
  );
}

export default HomeChallengesPage;
