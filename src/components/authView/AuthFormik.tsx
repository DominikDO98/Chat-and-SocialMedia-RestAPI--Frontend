import { Form, Formik } from "formik";
import { UserCreationEnitity } from "../../utils/types/user.types";
import { AuthForm } from "./AuthForm";
import {
  authFormInitialValues,
  authFormValidationConfig,
} from "../../utils/formik/formConfig";

interface Props {
  label: "Log In" | "Sign Up";
  submit: (
    values: Omit<UserCreationEnitity, "id">,
    setSubmitting: (isSubmiting: boolean) => void
  ) => Promise<void>;
  validatation: (values: Omit<UserCreationEnitity, "id">) =>
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
        initialValues={authFormInitialValues}
        {...authFormValidationConfig}
        validate={(values) => props.validatation(values)}
        onSubmit={(values, { setSubmitting }) =>
          props.submit(values, setSubmitting)
        }
      >
        <Form>
          <AuthForm label={props.label} />
        </Form>
      </Formik>
    </div>
  );
};
