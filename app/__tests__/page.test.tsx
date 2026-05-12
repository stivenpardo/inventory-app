import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the HeroSection", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("Inventory");
  });

  it("renders the Learn More CTA", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: "Learn More" })
    ).toBeInTheDocument();
  });
});
