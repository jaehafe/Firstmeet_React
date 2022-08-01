// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // b -> state 변경을 도와주는 함수
  let [set, setList] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // likeSet -> state변경용 함수
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  [1, 2, 3].map(function(a){
    return '123123123'
  })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      { 
        set.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i) }}>
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

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>

      { 
        modal == true ? <Modal title={title} set = {set}/> : null
      }

    </div>
  );
}

// 부모 -> 자식 state전송하려면 props문법 사용
// 1. <자식 컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용
// 컴포넌트
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.set[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;