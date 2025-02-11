import { ERROR_MESSAGE } from "@/constants/errorMessage";

export const getErrorMessage = (error: unknown) => {
  console.log("An error occurred", { error });
  if (error instanceof Error) {
    return error.message;
  }
  return ERROR_MESSAGE.GENERAL;
};
