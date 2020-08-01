import React from "react";

import * as S from "./styled";

const ImageCard = ({ image, name, onClick, onDelete }) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.ImageWrapper>
        <S.ImageName> {name} </S.ImageName>
        <S.TrashIcon onClick={onDelete} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default ImageCard;
