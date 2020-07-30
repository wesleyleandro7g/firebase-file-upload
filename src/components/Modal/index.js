import React from "react";

import * as S from "./styled";

const ModalComponent = ({ isModal, input, closeModal }) => {
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
        <S.Image src={input} />
      </S.ImageWrapper>

      <S.DescribeWrapper>
        <S.Input placeholder="Dê um nome para essa imagem..." />
        <S.IconWrapper>
          <S.Check />
          <S.Close onClick={closeModal} />
        </S.IconWrapper>
      </S.DescribeWrapper>
    </S.Container>
  );
};

export default ModalComponent;
