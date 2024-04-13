import { Form, Formik } from "formik";
import {
  authFormInitialValues,
  authFormValidationConfig,
} from "../../utils/formik/formConfig";
import { useHandleError } from "../../utils/hooks/useHandleError";
import { UserCreationEnitity } from "../../utils/types/user.types";
import { AuthForm } from "./AuthForm";
import { AuthenticationError } from "../../utils/errorUtils/errors";

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
  const handleError = useHandleError();
  return (
    <div id="login">
      <Formik
        initialValues={authFormInitialValues}
        {...authFormValidationConfig}
        validate={(values) => props.validatation(values)}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            await props.submit(values, setSubmitting);
          } catch (err) {
            if (err instanceof AuthenticationError) {
              setFieldError(err.key, err.message);
            } else {
              handleError(err as Error);
            }
          }
        }}
      >
        <Form>
          <AuthForm label={props.label} />
        </Form>
      </Formik>
    </div>
  );
};
