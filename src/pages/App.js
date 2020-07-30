import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";

import { storage } from "../services/firebase";

import ImageCard from "../components/ImageCard";
import Modal from "../components/Modal";

import * as S from "./styled";

import GlobalStyles from "../styles/Global";

import img1 from "../assets/desencoder.jpeg";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const HandleImagePreview = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      const reader = new FileReader();

      reader.onload = function (e) {
        setPreview(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);

      setIsModal(!isModal);
    }
  };

  useEffect(() => {
    const listImages = storage.child("images");
    console.log(listImages);
  }, []);

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
              <MdAddCircle size={50} color="#262626" />
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
        </S.Main>

        <Modal
          input={preview}
          isModal={isModal}
          file={file}
          closeModal={() => setIsModal(!isModal)}
        />
      </S.Container>
    </>
  );
};

export default App;
