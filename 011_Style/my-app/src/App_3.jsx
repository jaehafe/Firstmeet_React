import styled from "styled-components"

const ContentDiv = styled.div`
  margin: 40px;
  border: 1px solid black;
`

const ContentH2 = styled.h2`
  color: ${({name}) => (name === 'hello'? 'red' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: cetner;
`

function App() {
  return (
    <ContentDiv>
      <ContentH2 name='hello'>Q&A</ContentH2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
    </ContentDiv>
  );
}

export default App;