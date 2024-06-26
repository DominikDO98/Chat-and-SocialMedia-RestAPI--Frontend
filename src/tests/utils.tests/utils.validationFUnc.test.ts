import {
  loginValidation,
  signupValidation,
} from "../../utils/formik/validationFunc";
import { UserCreationEnitity } from "../../utils/types/user.types";

describe("formik validation functions tests", () => {
  describe("loginValidation tests", () => {
    test("loginValidation passes when correct data is provided", () => {
      const goodValues: Omit<UserCreationEnitity, "id"> = {
        username: "name5",
        password: "password8",
        email_address: "emailemail@wp.pl",
      };
      expect(loginValidation(goodValues)).toStrictEqual(undefined);
    });
    test("loginValidation throws error when incorrect data is provided", () => {
      const data1: Omit<UserCreationEnitity, "id"> = {
        username: "name",
        password: "",
        email_address: "emailemail",
      };
      const data2: Omit<UserCreationEnitity, "id"> = {
        username: "name",
        password: "",
        email_address: "",
      };
      const data3: Omit<UserCreationEnitity, "id"> = {
        username: "",
        password: "",
        email_address: "",
      };
      expect(loginValidation(data1)).toStrictEqual({
        email_address: ["Invalid email"],
        password: ["String must contain at least 8 character(s)"],
      });
      expect(loginValidation(data2)).toStrictEqual({
        username: ["String must contain at least 5 character(s)"],
        password: ["String must contain at least 8 character(s)"],
      });
      expect(loginValidation(data3)).toStrictEqual({
        email_address: ["Invalid email"],
        password: ["String must contain at least 8 character(s)"],
        username: ["String must contain at least 5 character(s)"],
      });
    });
  });
  describe("signupValidation tests", () => {
    test("signupValidation passes when correct data is provided", () => {
      const goodValues: Omit<UserCreationEnitity, "id"> = {
        username: "name5",
        password: "password8",
        email_address: "emailemail@wp.pl",
      };
      expect(signupValidation(goodValues)).toStrictEqual(undefined);
    });
    test("signupValidation throws error when incorrect data is provided", () => {
      const data1: Omit<UserCreationEnitity, "id"> = {
        username: "name",
        password: "",
        email_address: "emailemail",
      };
      const data2: Omit<UserCreationEnitity, "id"> = {
        username: "name",
        password: "",
        email_address: "",
      };
      const data3: Omit<UserCreationEnitity, "id"> = {
        username: "",
        password: "",
        email_address: "",
      };
      expect(signupValidation(data1)).toStrictEqual({
        email_address: ["Invalid email"],
        password: ["String must contain at least 8 character(s)"],
        username: ["String must contain at least 5 character(s)"],
      });
      expect(signupValidation(data2)).toStrictEqual({
        email_address: ["Invalid email"],
        password: ["String must contain at least 8 character(s)"],
        username: ["String must contain at least 5 character(s)"],
      });
      expect(signupValidation(data3)).toStrictEqual({
        email_address: ["Invalid email"],
        password: ["String must contain at least 8 character(s)"],
        username: ["String must contain at least 5 character(s)"],
      });
    });
  });
});
