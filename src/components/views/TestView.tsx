import { useEffect } from "react";
import { useHandleError } from "../utils/hooks/useHandleError";

export const TestView = () => {
  const handleError = useHandleError();
  useEffect(() => {
    try {
      throw Error;
    } catch (error) {
      handleError(error as Error);
    }
  }, []);
  return "something something";
};
