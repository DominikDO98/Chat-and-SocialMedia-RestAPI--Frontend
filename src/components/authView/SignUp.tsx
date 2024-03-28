export const SignUp = () => {
  return (
    <div>
      <label>
        <p>SignUp</p>
        <label>
          <p>E-mail address</p>
          <input type="email" name="email_address" id="sign_email" />
        </label>
        <label>
          <p>Username</p>
          <input type="text" name="username" id="sign_username" />
        </label>
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" id="sign_password" />
      </label>
    </div>
  );
};
