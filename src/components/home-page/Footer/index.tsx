import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent, useState } from "react";
import { z } from "zod";
import {
  Container,
  DevBy,
  FormGroup,
  SubmitButton,
  TextArea,
  TextInput,
  Wrapper,
} from "./styled";

import { AnimatedGradientTitle } from "../AnimatedTextTitle";
import Alert from "../Alert";
import { Link } from "react-router-dom";

// Esquema de validação usando zod
const schema = z.object({
  name: z.string().min(3).max(50).nonempty(),
  email: z.string().email(),
  phone: z
    .string()
    .min(10)
    .max(15)
    .regex(/^\+?[0-9]{10,14}$/),
});

export const Footer = () => {
  const [showAlertEmailSuccess, setShowAlertEmailSuccess] = useState(false);
  const [showAlertEmailError, setShowAlertEmailError] = useState(false);
  const [showAlertInvalidForm, setShowAlertInvalidForm] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setSendingEmail(true);

    if (form.current) {
      const isValid = await validateForm();
      if (isValid) {
        emailjs
          .sendForm(
            "service_ljw0bmc",
            "template_hdzuf1f",
            form.current,
            "E8nrCODF8gj5CPDTy"
          )
          .then(
            () => {
              setShowAlertEmailSuccess(true);
              setTimeout(() => {
                setShowAlertEmailSuccess(false);
                setSendingEmail(false);
              }, 4000);
            },
            () => {
              setShowAlertEmailError(true);
              setTimeout(() => {
                setShowAlertEmailError(false);
                setSendingEmail(false);
              }, 4000);
            }
          );
      } else {
        setSendingEmail(false);
        setShowAlertInvalidForm(true);
        setTimeout(() => {
          setShowAlertInvalidForm(false);
        }, 4000);
      }
    }
  };

  const validateForm = async () => {
    if (form.current) {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      try {
        // Validar os campos usando o esquema de validação do zod
        schema.parse(data);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    return false;
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
            <TextInput type="text" name="name" id="name" required />

            <label htmlFor="email">Qual é o seu melhor e-mail?</label>
            <TextInput type="email" name="email" id="email" required />

            <label htmlFor="phone">Qual é o seu telefone para contato?</label>
            <TextInput type="tel" name="phone" id="phone" required />

            <label htmlFor="message">
              Digite uma breve mensagem sobre o que você precisa:
            </label>
            <TextArea name="message" id="message" required></TextArea>

            <SubmitButton type="submit">
              {sendingEmail && (
                <Player
                  src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json"
                  loop
                  autoplay
                  className="lottieLoading"
                />
              )}

              {!sendingEmail && <span>ENVIAR</span>}
            </SubmitButton>
          </FormGroup>
        </div>

        <DevBy>
          <Link to={"/challenges"}>Desenvolvido por mim 😊</Link>
        </DevBy>
      </Wrapper>

      {showAlertEmailSuccess && (
        <Alert type="success" message="E-mail enviado com sucesso!" />
      )}

      {showAlertEmailError && (
        <Alert type="error" message="Oops, algo errado ao enviar e-mail." />
      )}

      {showAlertInvalidForm && (
        <Alert type="error" message="Preencha com dados validos." />
      )}
    </Container>
  );
};
