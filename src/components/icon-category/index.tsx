import Icon from "./styles";

interface IIconCategoryProps {
  src: string;

}

const IconCategory = ({ src }: IIconCategoryProps) => {
  return <Icon src={src} height={45} width={72} scaleFactor={1.1} />
}

export default IconCategory;