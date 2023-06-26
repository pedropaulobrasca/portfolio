import styled from 'styled-components'

const Button = styled.button`
  color: blue;
  background-color: #dddddd;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`

function App() {
  const handleClickButton = () => {
    alert(1)
  }

  return (
    <>
      <h1>Teste</h1>
      <Button onClick={handleClickButton}>Teste</Button>
    </>
  )
}

export default App
