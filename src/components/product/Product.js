import React from "react";
import { useState } from "react";
import KeywordSearch from "../keywordSearch/KeywordSearch";

import dummyData from "../db/dummyData.json";

export default function Product() {
  const [keyword, setKeyword] = useState("도서");
  const productList = dummyData.products.filter(
    (category) => category.keyword === keyword
  );
  console.log(productList);

  return (
    <div className="main">
      <div className="inline__container">
        <div className="search__keyword">
          키워드 검색 <t />
          <KeywordSearch keyword={keyword} setKeyword={setKeyword} />
        </div>
      </div>
      <div className="search__itembox">
        <div className="search__item">
          <h3>상품 목록</h3>
          <table>
            <tbody>
              {productList.map((product) => (
                <tr>
                  <td>{product.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="navigate__coupang">쿠팡 사이트로 이동</button>
      {/*이 상자가 검색 되는 물품 개수에 따라서 나와야 함*/}
      {/*일단 검색 했을 때의 정보를 usestate로 바꿀 수 있어야 할 듯?*/}
      {/*상자 안에는 상품에 대한 정보(상품명, 로켓 배송 여부, 별점, 판매 가격, 할인율 등)에 대한 value 필요 */}
    </div>
  );
}
