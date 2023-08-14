import React from "react";
import Header from "./Header";
import Body from "./Body";
import data from "./data.json";

export default function GlassStore() {
  return (
    <div
      style={{
        backgroundImage: "url(./img/thiet-ke-cua-hang-kinh-mat-4.webp)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Body list={data} />
    </div>
  );
}
