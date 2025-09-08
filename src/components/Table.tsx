import Button from "react-bootstrap/Button";
import Pagination from "./Pagination";
import type { Product } from "./data";

export default function Table({
  products,
  handleDelete,
  toggleAvailable,
}: {
  products: Product[];
  handleDelete: (id: number) => void;
  toggleAvailable: (id: number) => void;
}) {
  return (
    <div className="listProduct rounded p-4">
      <h2 className="text-center mb-3">Danh sách sản phẩm</h2>
      <table className="text-center" style={{ width: "100%" }}>
        <thead className="text-center bg-body-secondary">
          <tr>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td
                className={`text-start ${
                  !product.isAvailable &&
                  "text-decoration-line-through text-secondary"
                }`}
              >
                <strong>{product.name}</strong>
              </td>
              <td className="text-center align-middle text-success">
                {product.price.toLocaleString()}đ
              </td>
              <td className="text-center align-middle">
                <span
                  className={`p-2 rounded-5 bg-opacity-25 ${
                    product.isAvailable
                      ? "bg-success text-success"
                      : "bg-danger text-danger"
                  }`}
                >
                  {product.isAvailable ? "Còn hàng" : "Hết hàng"}
                </span>
              </td>
              <td className="text-center align-middle d-flex gap-2 justify-content-center">
                <Button
                  variant="outline-primary"
                  onClick={() => toggleAvailable(product.id)}
                >
                  Đánh dấu
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-secondary text-end fs-5">
        Tổng: {products.length} sản phẩm
      </p>
      <Pagination length={products.length} />
    </div>
  );
}
