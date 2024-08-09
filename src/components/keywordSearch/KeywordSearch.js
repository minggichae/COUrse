import React from "react";

export default function Search({
  keyword,
  setKeyword,
  setSearchbtn,
  handleProductList,
}) {
  // 입력한 키워드를 넣기위한 함수
  const KeywordInput = (e) => {
    setKeyword(e.target.value);
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
      <button className="keyword-btn" onClick={handleProductList}>
        검색
      </button>
    </>
  );
}
