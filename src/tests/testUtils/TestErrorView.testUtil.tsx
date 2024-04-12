import React from "react";
import { useHandleError } from "../../components/utils/hooks/useHandleError";
interface Props {
  message: string;
}
export const TestView = (props: Props) => {
  const handleError = useHandleError();
  const register = () => {
    try {
      throw new Error(props.message);
    } catch (error) {
      handleError(error as Error);
    }
  };

  return (
    <>
      <button data-testId="fireError" onClick={register}>
        ErrorButton
      </button>
    </>
  );
};
