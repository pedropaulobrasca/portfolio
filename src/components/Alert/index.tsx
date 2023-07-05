import { AlertContainer } from "./styled";

interface AlertProps {
  type: "success" | "error";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return <AlertContainer type={type}>{message}</AlertContainer>;
};

export default Alert;
