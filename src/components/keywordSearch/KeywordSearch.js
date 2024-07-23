import React from "react";
import { useState } from "react";

export default function Search({
  keyword,
  setKeyword,
  Searchbtn,
  setSearchbtn,
}) {
  // 입력한 키워드를 넣기위한 함수
  const KeywordInput = (e) => {
    setKeyword(e.target.value);
  };

  const Searchbtnboolean = () => {
    setSearchbtn(true);
  };

  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={KeywordInput}
        className="keyword-input"
        placeholder="상품을 검색하세요"
      />
      <button className="keyword-btn" onClick={Searchbtnboolean}>
        검색
      </button>
    </>
  );
}
