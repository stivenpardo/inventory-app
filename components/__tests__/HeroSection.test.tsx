import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders the heading", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Inventory");
    expect(heading).toHaveTextContent("Management");
  });

  it("renders descriptive paragraph text", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet/i)
    ).toBeInTheDocument();
  });

  it("renders a Learn More button linking to /learn-more", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: "Learn More" });
    expect(link).toHaveAttribute("href", "/learn-more");
  });

  it("renders the illustration as a decorative SVG", () => {
    render(<HeroSection />);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("renders within a section element", () => {
    const { container } = render(<HeroSection />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
