import { useFormik } from "formik";
export const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email_address: "",
      password: "",
    },
    //@TODO: validate
    onSubmit(values) {
      //@TODO: submit
      // use FormikHelpers
      console.log(values);
    },
  });

  return (
    <div id="signup">
      <form onSubmit={formik.handleSubmit}>
        <label>
          <p>SignUp</p>

          <label>
            <p>E-mail address</p>
            <input type="email" name="email_address" id="signup_email" />
            {/* @TODO: show error if invalid and on blur */}
          </label>

          <label>
            <p>Username</p>
            <input type="text" name="username" id="signup_username" />
            {/* @TODO: show error if invalid and on blur */}
          </label>

          <label>
            <p>Password</p>
            <input type="password" name="password" id="signup_password" />
            {/* @TODO: show error if invalid and on blur */}
          </label>
        </label>
      </form>
    </div>
  );
};
