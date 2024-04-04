import { TextInput } from "../common/TextInput";

export const AuthForm = () => {
  return (
    <div>
      <label>
        <p>Login</p>
        <TextInput label="Username" type="text" name="username" />
        <TextInput label="E-mail address" type="email" name="email_address" />
        <TextInput label="Password" type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </div>
  );
};
