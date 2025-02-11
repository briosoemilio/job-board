import { ERROR_ICON } from "@/constants/errorIcon";
import { ErrorText } from "./styles";

const ErrorIcon = () => {
  const variants = Object.values(ERROR_ICON);
  const randomIndex = Math.floor(Math.random() * variants.length);
  const errIcon = variants[randomIndex];
  return <ErrorText>{errIcon}</ErrorText>;
};

export default ErrorIcon;
