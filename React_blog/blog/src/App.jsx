// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // b -> state 변경을 도와주는 함수
  let [set, setList] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // likeSet -> state변경용 함수
  let [like, likeSet] = useState(0);
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

      <div className='list'>
        {/* state 변경하는 법: state변경함수(새로운state) */}
        <h4>{ set[0] } <span onClick={() => {likeSet(like+1)}}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ set[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ set[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

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