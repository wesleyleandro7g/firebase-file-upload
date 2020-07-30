import styled from "styled-components";
import Modal from "react-modal";
import { FiCheck, FiX } from "react-icons/fi";

export const Container = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 65%;
`;

export const ImageWrapper = styled.div`
  width: 70%;
  height: 70%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const DescribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  height: 30%;
`;

export const Input = styled.input`
  height: 40px;
  border: 0;
  background-color: transparent;
  text-align: center;
  color: #fff;
  font-size: 16px;

  ::placeholder {
    color: #bababa;
    font-style: italic;
  }

  :focus {
    outline: 0;

    ::placeholder {
      color: transparent;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Check = styled(FiCheck)`
  font-size: 25px;
  color: #1aff1a;
  padding: 15px;
  cursor: pointer;
`;

export const Close = styled(FiX)`
  font-size: 25px;
  color: #ff5c33;
  padding: 15px;
  cursor: pointer;
`;
