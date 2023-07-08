import { styled } from "styled-components";
import { AnimatedGradient } from "../AnimatedTextTitle";

export const Container = styled.div`
  position: relative;

  margin-top: 10rem;

  @media only screen and (max-width: 1180px) {
    margin-top: 5rem;
  }
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
    margin-top: 3rem;
  }

  .lottieImage {
    width: 40rem;
  }

  @media only screen and (max-width: 1180px) {
    margin-top: 5rem;

    div {
      flex-direction: column;
      margin-top: 0;
    }

    .lottieImage {
      width: 25rem;
    }

    h2 {
      margin-bottom: 2.5rem;
      font-size: 1rem;
    }

    h1 {
      font-size: 1.5rem;
      text-align: center;
      max-width: 300px;
    }
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  font-weight: bold;
  font-size: 1.2rem;

  @media only screen and (max-width: 1180px) {
    margin: 0 2rem;
  }
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

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
`;
