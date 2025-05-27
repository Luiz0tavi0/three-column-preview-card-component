import { StyledButton } from './styles'


interface IstyledButtonProps {
  $contentText?: String
}
const Button = ({ $contentText }: IstyledButtonProps) => {
  return (
    <StyledButton>
      {$contentText || "generic text"}
    </StyledButton>
  )
}

export default Button;