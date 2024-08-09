import React, { useEffect, useState } from "react";
import KeywordSearch from "../keywordSearch/KeywordSearch";
import dummyData from "../../Dummy/dummyData.json";

export default function Product() {
  const [keyword, setKeyword] = useState(""); // 검색하는 키워드를 저장하는 state
  const [searchbtn, setSearchbtn] = useState(false); // 버튼의 true, false를 저장하는 state
  const [productList, setProductList] = useState([]); // 상품 목록을 저장하는 state
  const [keywordList, setKeywordList] = useState([]); // 키워드 목록을 저장하는 state

  // 사이트가 렌더링될 때 실행
  useEffect(() => {
    // 중복 없는 키워드 목록 생성
    const keywords = [...new Set(dummyData.category.map((cat) => cat.keyword))];
    setKeywordList(keywords);
  }, []);

  // 검색 버튼을 누르면 실행
  const handleProductList = () => {
    const dummyList = dummyData.products.filter(
      (product) => product.keyword === keyword
    );

    setProductList(dummyList);
    setSearchbtn(true); // 검색 버튼을 클릭한 후에는 항상 true로 설정
  };

  return (
    <div className="product__main">
      <div className="inline__container">
        <div className="search__keyword">
          키워드 검색 <t />
          <KeywordSearch
            keyword={keyword}
            setKeyword={setKeyword}
            setSearchbtn={setSearchbtn}
            handleProductList={handleProductList}
          />
          <p />
          <p>키워드 목록</p>
          <ul>
            {keywordList.map((keywordItem, index) => (
              <t key={index}>{keywordItem} </t>
            ))}
          </ul>
        </div>
      </div>
      <div className="search__itembox">
        {searchbtn ? (
          <div className="search__item">
            <h3>상품 목록</h3>
            <table>
              <tbody>
                {productList.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="search__item">
            <h3>상품 목록</h3>
            <p>상품의 키워드를 검색하세요.</p>
          </div>
        )}
      </div>
      <p></p>
      <button className="navigate__coupang">쿠팡 사이트로 이동</button>
    </div>
  );
}
