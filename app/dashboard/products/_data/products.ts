export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    sku: "ELEC-001",
    name: "Wireless Headphones",
    category: "Electronics",
    quantity: 45,
    unitPrice: 79.99,
  },
  {
    id: "2",
    sku: "ELEC-002",
    name: "USB-C Cable",
    category: "Electronics",
    quantity: 120,
    unitPrice: 12.99,
  },
  {
    id: "3",
    sku: "CLOTH-001",
    name: "Cotton T-Shirt",
    category: "Clothing",
    quantity: 0,
    unitPrice: 19.99,
  },
  {
    id: "4",
    sku: "CLOTH-002",
    name: "Denim Jeans",
    category: "Clothing",
    quantity: 32,
    unitPrice: 59.99,
  },
  {
    id: "5",
    sku: "TOOL-001",
    name: "Cordless Drill",
    category: "Tools",
    quantity: 8,
    unitPrice: 149.99,
  },
  {
    id: "6",
    sku: "TOOL-002",
    name: "Hammer Set",
    category: "Tools",
    quantity: 25,
    unitPrice: 34.99,
  },
  {
    id: "7",
    sku: "HOME-001",
    name: "Desk Lamp",
    category: "Home",
    quantity: 15,
    unitPrice: 44.99,
  },
  {
    id: "8",
    sku: "HOME-002",
    name: "Throw Pillow",
    category: "Home",
    quantity: 56,
    unitPrice: 24.99,
  },
  {
    id: "9",
    sku: "ELEC-003",
    name: "Mechanical Keyboard",
    category: "Electronics",
    quantity: 18,
    unitPrice: 129.99,
  },
  {
    id: "10",
    sku: "CLOTH-003",
    name: "Winter Jacket",
    category: "Clothing",
    quantity: 12,
    unitPrice: 99.99,
  },
];

export function filterProducts(
  products: Product[],
  query: string
): Product[] {
  if (!query.trim()) return products;

  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.sku.toLowerCase().includes(lower) ||
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  );
}
