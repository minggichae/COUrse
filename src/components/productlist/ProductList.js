import React from "react";
import dummyData from "../db/dummyData.json";

export default function ProductList() {
  console.log(dummyData);
  return (
    <div className="keyword_list">
      <h3>키워드 종류</h3>
      <ul className="products_list">
        {dummyData.category.map((keyword) => (
          <li key={keyword.id}>{keyword.keyword}</li>
        ))}
      </ul>
    </div>
  );
}
