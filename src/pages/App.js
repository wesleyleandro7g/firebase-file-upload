import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

import ImageCard from "../components/ImageCard";
import Modal from "../components/Modal";

import * as S from "./styled";

import GlobalStyles from "../styles/Global";

import img1 from "../assets/desencoder.jpeg";
import img2 from "../assets/desencoder-2.png";
import img3 from "../assets/MyFile.jpeg";
import img4 from "../assets/Server.jpg";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [file, setFile] = useState({});

  const HandleImagePreview = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsModal(!isModal);
    }
  };

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <S.HeaderWrapper>
          <h1>React Image Upload - Firebase</h1>
        </S.HeaderWrapper>
        <S.Main>
          <label htmlFor="selectFile">
            <S.InputWrapper>
              <MdAddCircle size={50} color="#333" />
              <S.Input
                id="selectFile"
                type="file"
                onChange={HandleImagePreview}
              />
            </S.InputWrapper>
          </label>

          <ImageCard
            name="DesenCoder"
            image={img1}
            onClick={() => alert("Visualizar imagem completa")}
            onDelete={() => alert("Deletar a imagem")}
          />

          <ImageCard
            name="DesenCoder Logotipo"
            image={img2}
            onClick={() => alert("Visualizar imagem completa")}
            onDelete={() => alert("Deletar a imagem")}
          />

          <ImageCard
            name="Minérios"
            image={img3}
            onClick={() => alert("Visualizar imagem completa")}
            onDelete={() => alert("Deletar a imagem")}
          />

          <ImageCard
            name="Servidores"
            image={img4}
            onClick={() => alert("Visualizar imagem completa")}
            onDelete={() => alert("Deletar a imagem")}
          />
        </S.Main>

        <Modal
          img={file}
          isModal={isModal}
          closeModal={() => setIsModal(!isModal)}
        />
      </S.Container>
    </>
  );
};

export default App;
