
import styled from "styled-components";


const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
    
  @media screen and (max-width: 375px){
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }
`


export default StyledContainer;