import type { ReactNode } from "react";
import StyledContainer from "./styles";

interface IPreviewContainer {
  children: ReactNode;
}

const PreviewContainer = ({ children }: IPreviewContainer) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default PreviewContainer;