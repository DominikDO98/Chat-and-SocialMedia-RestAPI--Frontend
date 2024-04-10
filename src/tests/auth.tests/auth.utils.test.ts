import * as SubmitFunctions from "../../utils/formik/submitFunc";
import {
  UserCreationEnitity,
  UserLoginByEmailData,
} from "../../utils/types/user.types";
const unmockedFetch = global.fetch;
const obj = {
  setSubmitting: (isSubmiting) => {
    isSubmiting;
  },
} as {
  userAuthData: UserLoginByEmailData;
  setSubmitting: (isSubmiting: boolean) => void;
};
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () =>
        Promise.resolve({
          username: "Username69",
          email_address: "email69@gmail.com",
        }),
    })
  ) as jest.Mock;
});
afterEach(() => {
  jest.clearAllMocks();
});
afterAll(() => {
  global.fetch = unmockedFetch;
});
describe("formik util functions tests", () => {
  describe("submit function tests", () => {
    test("submit function properly calls fetch", () => {
      SubmitFunctions.submit(
        obj.userAuthData,
        obj.setSubmitting,
        "loginUserByEmail"
      );
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `http://localhost:3000/auth/loginUserByEmail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
    });
    test("submit function thows error if response status is not 200 or 201", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 400,
          json: () =>
            Promise.resolve({
              message: "error",
            }),
        })
      ) as jest.Mock;
      const throwSubmit = async () => {
        try {
          await SubmitFunctions.submit(
            obj.userAuthData,
            obj.setSubmitting,
            "loginUserByEmail"
          );
        } catch (error) {
          throw new Error(error as string);
        }
      };
      expect(throwSubmit).rejects.toThrow("error 400");
    });
  });
  describe("loginSubmit and signupSubmit tests", () => {
    test("loginSubmit calls submit fucntion", async () => {
      jest.spyOn(SubmitFunctions, "submit");
      const arg: Omit<UserCreationEnitity, "id"> = {
        password: "",
        email_address: "a",
        username: "",
      };
      await SubmitFunctions.loginSubmit(arg, () => {});
      expect(SubmitFunctions.submit).toHaveBeenCalledTimes(1);
    });
    test("loginSubmit calls submit fucntion with correct arguments", async () => {
      jest.spyOn(SubmitFunctions, "submit");
      const arg: Omit<UserCreationEnitity, "id"> = {
        password: "",
        email_address: "a",
        username: "",
      };
      await SubmitFunctions.loginSubmit(arg, () => {});
      expect(SubmitFunctions.submit).toHaveBeenLastCalledWith(
        expect.anything(),
        expect.anything(),
        "loginUserByEmail"
      );
      const arg2: Omit<UserCreationEnitity, "id"> = {
        password: "",
        email_address: "a",
        username: "a",
      };
      await SubmitFunctions.loginSubmit(arg2, () => {});
      expect(SubmitFunctions.submit).toHaveBeenLastCalledWith(
        expect.anything(),
        expect.anything(),
        "loginUserByEmail"
      );
      const arg3: Omit<UserCreationEnitity, "id"> = {
        password: "",
        email_address: "",
        username: "b",
      };
      await SubmitFunctions.loginSubmit(arg3, () => {});
      expect(SubmitFunctions.submit).toHaveBeenLastCalledWith(
        expect.anything(),
        expect.anything(),
        "loginUserByName"
      );
    });
    test("signupSubmit calls submit function with right arguments", async () => {
      jest.spyOn(SubmitFunctions, "submit");
      const arg: Omit<UserCreationEnitity, "id"> = {
        password: "a",
        email_address: "a",
        username: "a",
      };
      await SubmitFunctions.signupSubmit(arg, () => {});
      expect(SubmitFunctions.submit).toHaveBeenCalledTimes(1);
      expect(SubmitFunctions.submit).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        "registerUser"
      );
    });
  });
});
