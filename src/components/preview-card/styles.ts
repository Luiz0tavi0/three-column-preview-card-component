import styled from "styled-components";
import type { ColorVariable } from ".";
import type { ReactNode } from "react";



interface ICardProps {
  $bgColor: ColorVariable;
  children?: ReactNode
}

const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: auto;
  padding: 40px;
  background-color: var(${(props) => props.$bgColor});
  
  .title-category {
    font-size: 25px;
    color: var(--very-light-gray);
    text-transform: uppercase;
  }
  
  p {
    color: var(--transparent-white);
  }
  @media screen and (max-width: 375px) {
    width: 350px;
    height: 425px;
  }
  @media screen and (min-width: 1440px) {
    width: 450px;
    height: 500px;
    
  }
`

export { Card }