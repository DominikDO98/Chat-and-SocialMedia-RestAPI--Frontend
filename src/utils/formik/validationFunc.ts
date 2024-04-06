import { ZodError } from "zod";
import {
  UserCreationSchema,
  UserLoginByEmailSchema,
  UserLoginByNameSchema,
} from "../schemas/user.schemas";
import { UserCreationEnitity } from "../types/user.types";

export const loginValidatation = (values: Omit<UserCreationEnitity, "id">) => {
  try {
    if (!values.username && !values.email_address)
      UserCreationSchema.parse(values);
    if (!values.username || (values.username && values.email_address))
      UserLoginByEmailSchema.parse(values);
    if (!values.email_address) UserLoginByNameSchema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.formErrors.fieldErrors;
    }
  }
};
export const signupValidatation = (values: Omit<UserCreationEnitity, "id">) => {
  try {
    UserCreationSchema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.formErrors.fieldErrors;
    }
  }
};
