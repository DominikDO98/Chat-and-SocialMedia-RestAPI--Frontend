import { Form, Formik } from "formik";
import {
  UserCreationEnitity,
  UserLoginByEmailData,
  UserLoginByNameData,
} from "../../utils/types/user.types";
import { AuthForm } from "./AuthForm";

interface Props {
  label: "Log In" | "Sign Up";
  validatation: (values: Omit<UserCreationEnitity, "id">) =>
    | {
        [x: string]: string[] | undefined;
        [x: number]: string[] | undefined;
        [x: symbol]: string[] | undefined;
      }
    | undefined;
}

const submit = async (
  userLoginData: UserLoginByEmailData | UserLoginByNameData,
  setSubmitting: (isSubmiting: boolean) => void,
  loginType: "loginUserByEmail" | "loginUserByName"
) => {
  const res = await fetch(`http://localhost:3000/auth/${loginType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userLoginData }),
  });
  const data = await res.json();
  // @TODO: throw error if res.status isn't ok
  console.log(data);
  setSubmitting(false);
};

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
        validate={(values) => props.validatation(values)}
        onSubmit={async (values, { setSubmitting }) => {
          if (values.email_address) {
            const userLoginData: UserLoginByEmailData = {
              password: values.password,
              email_address: values.email_address,
            };
            await submit(userLoginData, setSubmitting, "loginUserByEmail");
          }
          if (!values.email_address && values.username) {
            const userLoginData: UserLoginByNameData = {
              password: values.password,
              username: values.username,
            };
            await submit(userLoginData, setSubmitting, "loginUserByEmail");
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
