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
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0062cc;
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