import { useHandleError } from "../../../components/utils/hooks/useHandleError";

export const TestView = () => {
  const handleError = useHandleError();
  const register = () => {
    try {
      throw new Error("testError");
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
