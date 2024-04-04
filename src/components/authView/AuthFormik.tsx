import { Form, Formik, FormikValues } from "formik";
import { AuthForm } from "./AuthForm";

interface Props {
  label: "Log In" | "Sign Up";
  validatation: (
    values: FormikValues
  ) =>
    | {
        [x: string]: string[] | undefined;
        [x: number]: string[] | undefined;
        [x: symbol]: string[] | undefined;
      }
    | undefined;
}

export const AuthFormik = (props: Props) => {
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
        validate={props.validatation}
        onSubmit={(values) => {
          //@TODO: submit
          // use FormikHelpers
          console.log(values);
        }}
      >
        <Form>
          <AuthForm label={props.label} />
        </Form>
      </Formik>
    </div>
  );
};
