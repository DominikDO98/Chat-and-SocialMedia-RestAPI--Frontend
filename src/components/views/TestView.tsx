import { useCallback } from "react";
import { useHandleError } from "../utils/hooks/useHandleError";

export const TestView = () => {
  const handleError = useHandleError();
  const data = {
    userRegistrationData: {
      username: "Username69",
      password: "pass1word2",
      email_address: "email69@gmail.com",
    },
  };
  const register = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const recived = await res.json();
      if (res.status === 400) {
        throw new Error(recived.message);
      }
    } catch (error) {
      handleError(error as Error);
    }
  }, []);

  return (
    <>
      <button onClick={register}>COŚ ŻEBY LEPIEJ BYŁO WIDAĆ</button>
    </>
  );
};
