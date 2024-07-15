import React from "react";
import { useState } from "react";

export default function Search() {
  const [searchBox, setSearchBox] = useState("");

  const onChange = (e) => {
    setSearchBox(e.target.value);
  };

  return (
    <>
      <input
        className="search-input"
        placeholder="상품을 검색하세요."
        onChange={onChange}
        value={setSearchBox}
      />
    </>
  );
}
