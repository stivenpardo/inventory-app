import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the site logo/brand link", () => {
    render(<Navbar />);
    const brand = screen.getByRole("link", { name: "YOUR WEBSITE" });
    expect(brand).toHaveAttribute("href", "/");
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const expectedLinks = [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Info", href: "/info" },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("renders a Get Started CTA button", () => {
    render(<Navbar />);
    const cta = screen.getByRole("link", { name: "Get Started" });
    expect(cta).toHaveAttribute("href", "/get-started");
  });

  it("renders navigation inside a header element", () => {
    render(<Navbar />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders navigation element", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
