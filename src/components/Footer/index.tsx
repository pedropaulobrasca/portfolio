import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent } from "react";
import {
  Container,
  FormGroup,
  SubmitButton,
  TextArea,
  TextInput,
  Wrapper,
} from "./styled";

import { AnimatedGradientTitle } from "../AnimatedTextTitle";

export const Footer = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ljw0bmc",
          "template_hdzuf1f",
          form.current,
          "E8nrCODF8gj5CPDTy"
        )
        .then(
          () => {
            alert("Email enviado com sucesso!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container>
      <Wrapper>
        <AnimatedGradientTitle>
          E ai, vamos trabalhar juntos?
        </AnimatedGradientTitle>

        <h2>Entre em contato para conversarmos</h2>

        <div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_eroqjb7w.json"
            autoplay
            loop
            className="lottieImage"
          />

          <FormGroup ref={form} onSubmit={sendEmail}>
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

            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormGroup>
        </div>

        <span>Desenvolvido por mim 😊</span>
      </Wrapper>
    </Container>
  );
};
