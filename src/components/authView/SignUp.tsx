import { Form, Formik } from "formik";
import { TextInput } from "../common/formikFields/TextInput";
export const SignUp = () => {
  return (
    <div id="signup">
      <Formik
        initialValues={{
          username: "",
          email_address: "",
          password: "",
        }}
        //@TODO: validate
        onSubmit={(values) => {
          //@TODO: submit
          // use FormikHelpers
          console.log(values);
        }}
      >
        <Form>
          <label>
            <p>SignUp</p>

            <TextInput
              label="E-mail address"
              type="email"
              name="email_address"
            />
            {/* @TODO: show error if invalid and on blur */}

            <TextInput label="Username" type="text" name="username" />
            {/* @TODO: show error if invalid and on blur */}

            <TextInput label="Password" type="password" name="password" />
            {/* @TODO: show error if invalid and on blur */}
          </label>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};
