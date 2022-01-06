import { render } from "@testing-library/react";
import sinon from "sinon";

import { ComponentA } from "./ComponentA";

/*
Task:
- Fix the failed unit tests 
*/
describe("ComponentA render", () => {
  it("ComponentA render - simulate click", () => {
    const handleClickSpy = sinon.spy();
    const props = {
      handleClick: () => {},
      value: "foo",
    };
    const wrapper = render(<ComponentA {...props} />);
    const submitButton = wrapper.find(".button");

    submitButton.simulate("click");

    expect(submitButton).toHaveLength(2);
    expect(wrapper.isEmptyRender()).toBe(true);
    expect(handleClickSpy.called).toBe(true);
    expect(handleClickSpy.calledWith("bar")).toBe(true);
  });
});
