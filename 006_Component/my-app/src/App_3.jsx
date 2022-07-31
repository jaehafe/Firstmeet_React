function 개인정보 ({name, phone, github}){
  console.log(name, phone, github);
  return (
    <section>
        <h2>개인정보</h2>
        <p>이름 : {name}</p>
        <p>전화번호 : {phone}</p>
        <p>github : {github}</p>
      </section>
  )
}
function 자격증과학력 ({title, contents}){
  return (
    <section>
      <h2>{title}</h2>
      <p>{contents}</p>
    </section>
  )
}
function 경력 (){
  return (
    <section>
      <h2>경력</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </section>
    )
}
function 수상경력 (){
  return (
    <section>
      <h2>수상경력</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </section>
    )
}


function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <개인정보 
        name='이재하' 
        phone='01000000000' 
        github='jaehafe'
      />
      <자격증과학력
        title='자격증'
        contents='자격증 내용'
      />
      <자격증과학력
        title='학력'
        contents='학력 내용'
      />
      <경력/>
      <수상경력/>
    </div>
  );
}

export default App;