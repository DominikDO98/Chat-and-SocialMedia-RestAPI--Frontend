import { ZodError } from "zod";
import {
  UserCreationSchema,
  UserLoginByEmailSchema,
  UserLoginByNameSchema,
} from "../../utils/schemas/user.schemas";
import { UserCreationEnitity } from "../../utils/types/user.types";
import { AuthFormik } from "./AuthFormik";
import { loginSubmit, signupSubmit } from "../../utils/formik/submitFunc";

export const AuthView = () => {
  const loginValidatation = (values: Omit<UserCreationEnitity, "id">) => {
    try {
      if (!values.username && !values.email_address)
        UserCreationSchema.parse(values);
      if (!values.username || (values.username && values.email_address))
        UserLoginByEmailSchema.parse(values);
      if (!values.email_address) UserLoginByNameSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };
  const signupValidatation = (values: Omit<UserCreationEnitity, "id">) => {
    try {
      UserCreationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };
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
