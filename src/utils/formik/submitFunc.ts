import {
  UserLoginByEmailData,
  UserLoginByNameData,
  UserCreationEnitity,
} from "../types/user.types";

export const submit = async (
  userAuthData:
    | UserLoginByEmailData
    | UserLoginByNameData
    | Omit<UserCreationEnitity, "id">,
  setSubmitting: (isSubmiting: boolean) => void,
  authType: "loginUserByEmail" | "loginUserByName" | "registerUser"
) => {
  const res = await fetch(`http://localhost:3000/auth/${authType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userAuthData }),
  });
  const data = await res.json();
  // @TODO: throw error if res.status isn't ok
  console.log(data);
  setSubmitting(false);
};

export const loginSubmit = async (
  values: Omit<UserCreationEnitity, "id">,
  setSubmitting: (isSubmiting: boolean) => void
) => {
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
    await submit(userLoginData, setSubmitting, "loginUserByName");
  }
};

export const signupSubmit = async (
  values: Omit<UserCreationEnitity, "id">,
  setSubmitting: (isSubmiting: boolean) => void
) => {
  const userRegistrationData: Omit<UserCreationEnitity, "id"> = {
    password: values.password,
    email_address: values.email_address,
    username: values.username,
  };
  await submit(userRegistrationData, setSubmitting, "registerUser");
};
