import React, { useState } from "react";

export default function Body({ list }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="container">
        <div className="image">
          <img src="./img/model.jpg" alt="model" width="280px" />
          {/* sử dụng toán tử và để lấy giá trị falsy value khi người dùng click vào mấu kính */}
          {selectedItem && (
            <div className="overlay">
              <img
                width="180px"
                style={{ position: "absolute", top: "80px", left: "50px" }}
                src={selectedItem.url}
                alt={selectedItem.name}
              />
              <div className="infor">
                <h2 className="name">{selectedItem.name}</h2>
                <p className="desc">{selectedItem.desc}</p>
                <h2 className="price">${selectedItem.price}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="background">
        {list.map((item) => {
          return (
            <button
              onClick={() => handleItemClick(item)}
              key={item.id}
              className="item"
            >
              <img src={item.img} alt={item.name} width="100px" />
            </button>
          );
        })}
      </div>
    </>
  );
}
