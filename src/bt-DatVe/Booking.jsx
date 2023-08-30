import React from "react";

export default function Booking() {
  return (
    <div>
      <h3 className="text-center text-white mb-3">Danh sách ghế bạn chọn</h3>
      <p className="text-white fw-bold">
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            borderRadius: "10px",
            margin: "10px",
          }}
        ></span>
        Ghế đã đặt
      </p>
      <p className="text-white fw-bold my-4">
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            borderRadius: "10px",
            margin: "10px",
          }}
        ></span>
        Ghế đang chọn
      </p>
      <p className="text-white fw-bold">
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "10px",
          }}
        ></span>
        Ghế chưa đặt
      </p>
    </div>
  );
}
