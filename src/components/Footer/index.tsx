import { styled } from "styled-components";
import { AnimatedGradient, AnimatedGradientTitle } from "../AnimatedTextTitle";
import { Player } from "@lottiefiles/react-lottie-player";

export const Container = styled.div`
  position: relative;

  margin-top: 10rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 10rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
  }

  .lottieImage {
    width: 40rem;
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  font-weight: bold;
  font-size: 1.2rem;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextInput = styled(InputField)`
  width: 100%;
  box-sizing: border-box;
`;

export const FocusedInput = styled(InputField)`
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  ${AnimatedGradient}
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AnimatedGradientTitle>
          <h2>E ai, vamos trabalhar juntos?</h2>
        </AnimatedGradientTitle>

        <h2>Entre em contato para conversarmos</h2>

        <div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_eroqjb7w.json"
            autoplay
            loop
            className="lottieImage"
          />

          <FormGroup action="">
            <label htmlFor="name">Qual é o seu nome completo?</label>
            <TextInput type="text" name="name" id="name" />

            <label htmlFor="email">Qual é o seu melhor e-mail?</label>
            <TextInput type="email" name="email" id="email" />

            <label htmlFor="phone">Qual é o seu telefone para contato?</label>
            <TextInput type="tel" name="phone" id="phone" />

            <label htmlFor="message">
              Digite uma breve mensagem sobre o que você precisa:
            </label>
            <TextArea name="message" id="message"></TextArea>

            <SubmitButton>Enviar</SubmitButton>
          </FormGroup>
        </div>

        <span>Desenvolvido por mim 😊</span>
      </Wrapper>
    </Container>
  );
};
