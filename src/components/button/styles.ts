
import styled from "styled-components";


const StyledButton = styled.button`
  background-color:hsl(0, 0%, 95%);
  
  font-family: "Lexend Deca", sans-serif;
  font-size:400;
  width:fit-content;
  height:45px;
  padding: 10px 22px 10px 22px;
  border:none;
  border-radius: 22.5px;
  box-shadow: inset 0 0 0 2px hsl(0, 0%, 95%);
  &:hover {
    background-color: transparent;
    color: hsl(0, 0%, 95%);
  }
`


export { StyledButton }