import Button from "../button";
import IconCategory from "../icon-category";
import { Card } from "./styles"
export type ColorVariable =
  | '--bright-orange'
  | '--dark-cyan'
  | '--very-dark-cyan';

interface IPreviewCardProps {
  color: ColorVariable;
  categoryTitle: string;
  categoryDescription: string;
  srcIcon:string

}

const PreviewCard = ({ srcIcon,  categoryDescription, color, categoryTitle }: IPreviewCardProps) => {
  return (<>
    <Card $bgColor={color} >
      <IconCategory src={srcIcon} />
      <h1 className={"title-category"}>{categoryTitle}</h1>
      <p>{categoryDescription}</p>
      <Button $contentText={'Learn More'} />
    </Card>
  </>
  )
}


export default PreviewCard