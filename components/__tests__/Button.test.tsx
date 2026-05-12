import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "@/components/Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button href="/test">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a link with the correct href", () => {
    render(<Button href="/dashboard">Go</Button>);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toHaveAttribute("href", "/dashboard");
  });

  it("applies solid variant styles by default", () => {
    render(<Button href="/test">Solid</Button>);
    const link = screen.getByRole("link", { name: "Solid" });
    expect(link.className).toContain("bg-purple-600");
    expect(link.className).toContain("text-white");
  });

  it("applies outline variant styles when specified", () => {
    render(
      <Button href="/test" variant="outline">
        Outline
      </Button>
    );
    const link = screen.getByRole("link", { name: "Outline" });
    expect(link.className).toContain("border");
    expect(link.className).toContain("text-purple-600");
    expect(link.className).not.toContain("bg-purple-600");
  });

  it("includes base styles for both variants", () => {
    const { rerender } = render(<Button href="/a">A</Button>);
    const solidLink = screen.getByRole("link", { name: "A" });
    expect(solidLink.className).toContain("rounded-full");
    expect(solidLink.className).toContain("font-semibold");

    rerender(
      <Button href="/b" variant="outline">
        B
      </Button>
    );
    const outlineLink = screen.getByRole("link", { name: "B" });
    expect(outlineLink.className).toContain("rounded-full");
    expect(outlineLink.className).toContain("font-semibold");
  });

  it("renders complex children", () => {
    render(
      <Button href="/test">
        <span data-testid="icon">★</span> Star
      </Button>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Star")).toBeInTheDocument();
  });
});
