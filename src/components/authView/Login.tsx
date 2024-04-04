import { Form, Formik, FormikValues } from "formik";
import { ZodError } from "zod";
import {
  UserCreationSchema,
  UserLoginByEmailSchema,
  UserLoginByNameSchema,
} from "../../utils/schemas/user.schemas";
import { AuthForm } from "./AuthForm";

const formValidatation = (values: FormikValues) => {
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

export const LogIn = () => {
  return (
    <div id="login">
      <Formik
        initialValues={{
          username: "",
          email_address: "",
          password: "",
        }}
        validateOnBlur={true}
        validateOnChange={true}
        validateOnMount={false}
        validate={formValidatation}
        onSubmit={(values) => {
          //@TODO: submit
          // use FormikHelpers
          console.log(values);
        }}
      >
        <Form>
          <AuthForm label="Log In" />
        </Form>
      </Formik>
    </div>
  );
};
