import './app.css'

function App() {
  // 주석입니다.
  const styleH2 = { border: 'solid 1px black', color: 'blue', fontSize: '32px' }
  return (
    <div>
      <h1>hello world</h1>
      <h2 style={styleH2}>hello world</h2>
      <h2 style={{border: 'solid 1px black', color: 'blue', fontSize: '32x'}}>hello world</h2>
      <p className="content">hello world</p>
    </div>
  )
}

export default App;