import styled from "styled-components";
import Modal from "react-modal";

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

export const Buttom = styled.button`
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  height: 20px;
  font-size: 12px;
  background-color: transparent;
  color: #ff3333;
  border: 0;
  cursor: pointer;
  transition-duration: 100ms;

  :focus {
    outline: 0;
  }

  :hover {
    opacity: 0.8;
  }
`;
