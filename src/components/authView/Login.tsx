export const LogIn = () => {
  return (
    <div>
      <label>
        <p>Login</p>
        <label>
          <p>E-mail address</p>
          <input type="email" name="email_address" id="log_email" />
        </label>
        <label>
          <p>Username</p>
          <input type="text" name="username" id="log_username" />
        </label>
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" id="log_password" />
      </label>
    </div>
  );
};
