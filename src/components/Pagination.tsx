export default function Pagination({ length }: { length: number }) {
  const productPerPage = 3;
  const pagesNumber = Math.ceil(length / productPerPage);
  const currentPage = 1;
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="d-flex gap-3">
        <div className="changePage d-flex gap-2 align-items-center">
          <p style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#d1d1d1"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </p>
          {Array.from({ length: pagesNumber }, (_, index) => {
            return (
              <p
                style={{ cursor: "pointer" }}
                key={index + 1}
                className={`py-2 px-3 rounded ${
                  index + 1 === currentPage
                    ? "border border-primary text-primary"
                    : "text-body"
                }`}
              >
                {index + 1}
              </p>
            );
          })}
          <p style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#d1d1d1"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </p>
        </div>
        <select className="form-select" style={{ height: "fit-content" }}>
          <option value="">3 / Page</option>
          <option value="">4 / Page</option>
          <option value="">5 / Page</option>
        </select>
      </div>
    </div>
  );
}
