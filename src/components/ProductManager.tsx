import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Table from "./Table";
import type { Product } from "./data";

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(localData);
  }, []);
  const addProduct = (newProduct: Product) => {
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleDelete = (id: number) => {
    const filterProduct = products.filter((element) => element.id !== id);
    setProducts(filterProduct);
    localStorage.setItem("products", JSON.stringify(filterProduct));
  };

  const toggleAvailable = (id: number) => {
    const updated = [...products];
    const index = updated.findIndex((element) => element.id === id);
    if (index === -1) return;
    updated[index].isAvailable = updated[index].isAvailable ? false : true;
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="container-fluid d-flex flex-column gap-4">
      <header className="text-center text-white rounded p-5">
        <h2>Quản lý sản phẩm</h2>
      </header>
      <AddProduct products={products} addProduct={addProduct} />
      <Table
        products={products}
        handleDelete={handleDelete}
        toggleAvailable={toggleAvailable}
      />
    </div>
  );
}
