// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // b -> state 변경을 도와주는 함수
  let [set, setList] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // likeSet -> state변경용 함수
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function(a){
    return '123123123'
  })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...set];
        copy.sort((a, b) => a.toLowerCase() < b.toLowerCase()? -1 : 1);
        setList(copy);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...set]; 
        copy[0] = '여자 코트 추천';
        setList(copy);
        }}> 수정 </button>


        {/* map()함수: 1. 왼쪽array자료만큼 내부코드 실행  
        2. return 오른쪽에 있는걸 array에 담아줌
        3. 파라미터 2개 사용 가능*/}
        {/* i: 반복문 돌 때마다 0부터 1씩 증가하는 정수 */}
      { 
        set.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4>
                { set[i] } <span onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
                }}>👍</span>{like[i]}
              </h4>
            </div>
          )
        })
      }

      { 
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

// 컴포넌트
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;