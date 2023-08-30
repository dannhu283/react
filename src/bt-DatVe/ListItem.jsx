import React from "react";
import Item from "./Item";

export default function ListItem({ seats }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-light">Màn hình</h3>
          <span class="placeholder col-md-12 bg-info"></span>
        </div>
        <table>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
