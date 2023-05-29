import React from 'react'
import styled from 'styled-components'
function Demo() {
const handleClick =(e)=>{
  e.preventDefault()
}
  
  const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: 300px;
  outline: 10px solid #fff;

`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(to right, #ffad00, #ff7300, #ffad00);

  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-image: linear-gradient(to right, #ff7300, #ffad00, #ffad00);
  }

`;
  return (
    <div>
         <Container>
      <Input type="text" placeholder="Enter URL" />
      <Button onClick={handleClick}>Submit</Button>
    </Container>
      
    </div>
  )
}

export default Demo