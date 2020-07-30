import React from "react";

import * as S from "./styled";

const ModalComponent = ({ isModal, img, closeModal }) => {
  return (
    <S.Container
      isOpen={isModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.8)",
        },
        content: {
          position: "absolute",
          border: "none",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          color: "#fff",
        },
      }}
    >
      <S.ImageWrapper>
        <S.Image src={img} />
      </S.ImageWrapper>

      <S.DescribeWrapper>
        <S.Input placeholder="Dê um nome para a sua imagem..." />
        <S.Buttom> FINALIZAR </S.Buttom>
        <S.ButtonCancel onClick={closeModal}> CANCELAR </S.ButtonCancel>
      </S.DescribeWrapper>
    </S.Container>
  );
};

export default ModalComponent;
