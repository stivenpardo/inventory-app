import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
};

export default function Button({ href, variant = "solid", children }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";

  const variants = {
    solid: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
