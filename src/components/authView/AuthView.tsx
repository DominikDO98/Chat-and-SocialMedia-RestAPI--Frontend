import { loginSubmit, signupSubmit } from "../../utils/formik/submitFunc";
import {
  loginValidation,
  signupValidation,
} from "../../utils/formik/validationFunc";
import { AuthFormik } from "./AuthFormik";

export const AuthView = () => {
  return (
    <div>
      <AuthFormik
        label="Log In"
        validatation={loginValidation}
        submit={loginSubmit}
      />
      <AuthFormik
        label="Sign Up"
        validatation={signupValidation}
        submit={signupSubmit}
      />
    </div>
  );
};
