import { loginSubmit, signupSubmit } from "../../utils/formik/submitFunc";
import {
  loginValidatation,
  signupValidatation,
} from "../../utils/formik/validationFunc";
import { AuthFormik } from "./AuthFormik";

export const AuthView = () => {
  return (
    <div>
      <AuthFormik
        label="Log In"
        validatation={loginValidatation}
        submit={loginSubmit}
      />
      <AuthFormik
        label="Sign Up"
        validatation={signupValidatation}
        submit={signupSubmit}
      />
    </div>
  );
};
