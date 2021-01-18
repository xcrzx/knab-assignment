import { PageLayout } from "../PageLayout";
import { render } from "@testing-library/react";

describe("PageLayout Component", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <PageLayout title="Test">Page content</PageLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
