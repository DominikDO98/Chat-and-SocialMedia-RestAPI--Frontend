import { submit } from "../../utils/formik/submitFunc";
import { UserLoginByEmailData } from "../../utils/types/user.types";

describe("formik util functions tests", () => {
  describe("submit function tests", () => {
    const obj = {
      setSubmitting: (isSubmiting) => {
        isSubmiting;
      },
    } as {
      userAuthData: UserLoginByEmailData;
      setSubmitting: (isSubmiting: boolean) => void;
    };
    test("submit function properly calls fetch", () => {
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
      submit(obj.userAuthData, obj.setSubmitting, "loginUserByEmail");
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
          await submit(obj.userAuthData, obj.setSubmitting, "loginUserByEmail");
        } catch (error) {
          throw new Error(error as string);
        }
      };
      expect(throwSubmit).rejects.toThrow("error 400");
    });
  });
});
