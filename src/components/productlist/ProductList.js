import React from "react";
import dummyData from "../db/dummyData.json";

export default function ProductList() {
  console.log(dummyData);
  return (
    <ul className="products_list">
      {dummyData.category.map((keyword) => (
        <li key={keyword.id}>종류: {keyword.keyword}</li>
      ))}
    </ul>
  );
}
