import {useState} from 'react'

function App() {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? '❤' : ''

  function clickLike() {
    if (like){
      setLike(false);  
    } else {
      setLike(true)
    }
    console.log(like);
  }

  return (
    <div>
      <button onClick={clickLike}>like</button> 
      <span>{heart ? heart : ''}</span>
    </div>
  );
}

export default App;