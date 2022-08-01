// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // b -> state 변경을 도와주는 함수
  let [set, setList] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // likeSet -> state변경용 함수
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  let [title] = useState(0);

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
              <h4 onClick={()=>{setModal(!modal)}}>
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
        modal == true ? <Modal setList={setList} color={'skyblue'} set = {set}/> : null
      }

    </div>
  );
}

export default App;