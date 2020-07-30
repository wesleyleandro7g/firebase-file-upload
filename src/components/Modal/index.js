import React, { useState } from "react";

import { storage } from "../../services/firebase";

import * as S from "./styled";

const ModalComponent = ({ isModal, input, closeModal, file }) => {
  const [imageName, setImageName] = useState("");
  const [progress, setProgress] = useState(0);

  const HandleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploadProgress);
      },
      (error) => {
        alert("Opss! Hove algum problema! Tente novamente...");
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );

    setTimeout(() => {
      closeModal();
    }, 3000);
  };

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
        <S.Input
          placeholder="Dê um nome para essa imagem..."
          onChange={(e) => setImageName(e.target.value)}
        />
        {progress ? (
          <h3> {progress} </h3>
        ) : (
          <S.IconWrapper>
            <S.Check onClick={() => HandleUpload()} />
            <S.Close onClick={closeModal} />
          </S.IconWrapper>
        )}
      </S.DescribeWrapper>
    </S.Container>
  );
};

export default ModalComponent;
