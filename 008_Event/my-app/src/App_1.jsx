function App() {
  function handleClickEvent(){
    console.log('click');
  }
  return (
    <div className="App">
      <h1 onClick={handleClickEvent}>test1</h1>
      <h1 onClick={()=>{console.log('click2');}}>test2</h1>
    </div>
  );
}

export default App;