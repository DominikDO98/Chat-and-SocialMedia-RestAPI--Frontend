import { TextInput } from "../common/TextInput";

export const AuthInput = () => {
  return (
    <div>
      <TextInput label="Username" type="text" name="username" />
      <TextInput label="E-mail address" type="email" name="email_address" />
      <TextInput label="Password" type="password" name="password" />
    </div>
  );
};
