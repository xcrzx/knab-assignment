import { HomePage } from "../HomePage";
import { render } from "@testing-library/react";

describe("HomePage Component", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
