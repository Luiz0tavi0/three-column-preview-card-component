import styled from "styled-components";

interface IIconProps {
  width: number;
  height: number;
  scaleFactor: number;
}

const Icon = styled.img<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  &:hover {
    scale: ${props => props.scaleFactor}
  }
`

export default Icon;