import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Swal from "sweetalert2";
import type { Product } from "./data";

export default function AddProduct({
  nextId,
  addProduct,
}: {
  nextId: number;
  addProduct: (newProduct: Product) => void;
}) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [isStock, setIsStock] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !price) {
      Swal.fire({
        title: "Tên hoặc giá tiền không được để trống!",
        icon: "warning",
      });
      return;
    }
    if (price < 0) {
      Swal.fire({
        title: "Giá tiền không được âm!",
        icon: "warning",
      });
      return;
    }

    const newProduct: Product = {
      id: nextId,
      name,
      price: Number(price),
      isAvailable: isStock,
    };

    addProduct(newProduct);
    setName("");
    setPrice(undefined);
    setIsStock(false);
  };

  return (
    <div className="addProduct rounded text-center p-4">
      <h3 className="mb-4">
        <span className="fs-1 text-primary">+</span> Thêm sản phẩm mới
      </h3>
      <Form
        onSubmit={handleSubmit}
        className="d-flex gap-3 justify-content-center align-items-center"
      >
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Tên sản phẩm"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Giá (đ)"
            value={price || ""}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Còn hàng"
            checked={isStock}
            onChange={() => setIsStock((prev) => !prev)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Thêm
        </Button>
      </Form>
    </div>
  );
}
