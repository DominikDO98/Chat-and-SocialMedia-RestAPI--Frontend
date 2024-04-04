import { FormikValues } from "formik";
import { ZodError } from "zod";
import {
  UserCreationSchema,
  UserLoginByEmailSchema,
  UserLoginByNameSchema,
} from "../../utils/schemas/user.schemas";
import { AuthFormik } from "./AuthFormik";

export const AuthView = () => {
  const loginValidatation = (values: FormikValues) => {
    try {
      if (!values.usename && !values.email_address)
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
  const signupValidatation = (values: FormikValues) => {
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
      <AuthFormik label="Log In" validatation={loginValidatation} />
      <AuthFormik label="Sign Up" validatation={signupValidatation} />
    </div>
  );
};
