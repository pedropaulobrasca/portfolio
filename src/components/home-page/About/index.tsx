import { AnimatedGradientTitle } from "../AnimatedTextTitle";

import { Player } from "@lottiefiles/react-lottie-player";
import { Container, LeftSide, RightSide, Wrapper, Number } from "./styled";

export const About = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <div>
            <Number>04+</Number>
            <p>Anos de experiência</p>
          </div>
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_zfszhesy.json"
            autoplay
            loop
            className="lottieImage"
          />
        </LeftSide>
        <RightSide>
          <AnimatedGradientTitle>Sobre mim</AnimatedGradientTitle>
          <p>
            Olá! Meu nome é Pedro Paulo (Pedro) e sou um apaixonado
            desenvolvedor web FullStack. Com uma formação em Análise e
            Desenvolvimento de Sistemas, adquiri um conjunto sólido de
            habilidades técnicas e uma vasta experiência no desenvolvimento de
            soluções digitais.
          </p>
          <p>
            Minha jornada no mundo da programação começou há alguns anos e desde
            então tenho me dedicado a aprimorar minhas habilidades em diversas
            tecnologias. Minhas principais áreas de expertise incluem o
            desenvolvimento de aplicações web utilizando Angular, NextJS,
            Node.js, JavaScript e TypeScript. Além disso, tenho experiência
            sólida em bancos de dados, especialmente PostgreSQL.
          </p>
          <p>
            O que mais me fascina no desenvolvimento web é a capacidade de
            transformar ideias em realidade. Adoro enfrentar desafios complexos
            e encontrar soluções criativas para problemas. Minha abordagem é
            baseada em boas práticas de desenvolvimento, mantendo um código
            limpo, escalável e de fácil manutenção.
          </p>
          <p>
            Sou um profissional comprometido, focado em entregar resultados de
            alta qualidade dentro dos prazos estabelecidos. Tenho experiência em
            trabalhar tanto em equipe quanto de forma autônoma, adaptando-me
            facilmente a diferentes ambientes e colaborando efetivamente com
            outros desenvolvedores, designers e stakeholders.
          </p>
          <p>
            Estou sempre em busca de aprendizado contínuo, acompanhando as
            últimas tendências e avanços tecnológicos. Acredito que a evolução é
            fundamental para oferecer soluções inovadoras e eficientes aos meus
            clientes.
          </p>
          <p>
            Se você está procurando um desenvolvedor web FullStack confiável,
            que entrega resultados excepcionais e tem paixão pelo que faz, estou
            pronto para ajudar a transformar suas ideias em realidade.
          </p>
        </RightSide>
      </Wrapper>
    </Container>
  );
};
