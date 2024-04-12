import { useState } from "react";

export const useHandleError = () => {
  const [state, setState] = useState();
  state;
  return (error: Error) => {
    setState(() => {
      throw error;
    });
  };
};
