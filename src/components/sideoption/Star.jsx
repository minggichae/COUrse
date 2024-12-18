import React, {useState} from 'react';
import { FaRegStar, FaStar} from 'react-icons/fa';
import '../../App.css';


export default function Star({starScore, setStarScore}) {
    const handleratingsStar = () => {
        let result = [];
        for (let i=0; i<5; i++) {
            result.push(<span key={i+1} onClick={() => setStarScore(i+1)}>
                {
                    starScore >= i+1 ? <FaStar className='Fastar'/> : <FaStar className='FaRegstar' />
                    //FaStar: 별점 채우기
                    //FaRegStar: 별점 없애기
                }
                </span>);
        }
        console.log(starScore);
        return result; //반복문으로 별 5개 만들고, push로 배열에 추가하기
    }
    return (
        <>
        <div className='Star__rating__container'>
        <p>별점 입력하기</p>       
            {handleratingsStar()}
        </div>
        </>
    )
}

