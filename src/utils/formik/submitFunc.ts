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
  if (res.status === 200 || res.status === 201) {
    console.log(data);
    setSubmitting(false);
  } else {
    throw new Error(`error ${res.status}`);
  }
};

export const loginSubmit = async (
  values: Omit<UserCreationEnitity, "id">,
  setSubmitting: (isSubmiting: boolean) => void
) => {
  if (values.email_address) {
    const userAuthData: UserLoginByEmailData = {
      password: values.password,
      email_address: values.email_address,
    };
    await submit(userAuthData, setSubmitting, "loginUserByEmail");
  }
  if (!values.email_address && values.username) {
    const userAuthData: UserLoginByNameData = {
      password: values.password,
      username: values.username,
    };
    await submit(userAuthData, setSubmitting, "loginUserByName");
  }
};

export const signupSubmit = async (
  values: Omit<UserCreationEnitity, "id">,
  setSubmitting: (isSubmiting: boolean) => void
) => {
  const userAuthData: Omit<UserCreationEnitity, "id"> = {
    password: values.password,
    email_address: values.email_address,
    username: values.username,
  };
  await submit(userAuthData, setSubmitting, "registerUser");
};
