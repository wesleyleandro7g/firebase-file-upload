import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { firestore } from "../services/firebase";

import ImageCard from "../components/ImageCard";
import Modal from "../components/Modal";

import * as S from "./styled";

import GlobalStyles from "../styles/Global";

import FirebaseLogo from "../assets/firebaseImage.png";
import ReactLogo from "../assets/reactLogo.png";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [data, setData] = useState([]);

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
    firestore
      .collection("images")
      .doc("doc")
      .get()
      .then(function (doc) {
        setData(doc.data().images);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <S.HeaderWrapper>
          <S.ImageLogo src={ReactLogo} />
          <h1>+</h1>
          <S.ImageLogo src={FirebaseLogo} />
          <h1>=</h1>
          <FaHeart size={"25%"} />
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

          {data.map((item) => (
            <ImageCard
              name={item.name}
              image={item.url}
              onClick={() => alert("Visualizar imagem completa")}
              onDelete={() => alert("Deletar a imagem")}
            />
          ))}
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
