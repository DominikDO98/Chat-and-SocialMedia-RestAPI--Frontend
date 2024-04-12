import renderer from "react-test-renderer";
import { AuthView } from "../../components/authView/AuthView";
import React from "react";
describe("AuthView tests", () => {
  test("AuthView matches a snapshot", () => {
    const authView = renderer.create(<AuthView />).toJSON();
    expect(authView).toMatchSnapshot();
  });
});
