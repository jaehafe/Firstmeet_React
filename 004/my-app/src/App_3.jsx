function App() {
  const name = '라이캣'
  const containerStyle = {
    'backgroundColor': 'black',
    'color' : 'white'  
}
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 style={containerStyle}>안녕, {name} 1호</h1>
        <h1>안녕, {name} 2호</h1>
        <div className="newClass"/>
      </div>
      <div style={containerStyle} className="App">
      <p style={{'color':'red'}}>년: {year}</p>
      <p>월/일: {`${month} / ${date}`}</p>
      <p>시간: {`${hour}시 ${min}분 ${sec}초`}</p>
      </div>
    </div>
  );
}

export default App;
