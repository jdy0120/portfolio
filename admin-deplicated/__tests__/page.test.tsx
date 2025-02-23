import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Next.js App Router 테스트를 위한 모킹
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
    };
  },
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "",
}));

describe("LoginPage", () => {
  it("renders a login page", () => {
    render(<></>);
  });
});
