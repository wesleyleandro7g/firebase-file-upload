import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 3px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  color: #fff;
  cursor: pointer;
  transition-duration: 200ms;

  :hover {
    opacity: 1;
  }
`;

export const ImageName = styled.h3`
  margin-left: 10%;
`;

export const TrashIcon = styled(FiTrash2)`
  font-size: 20px;
  margin-bottom: 10%;
  margin-left: auto;
  margin-top: auto;
  margin-right: 10%;
  transition: 200ms;

  :hover {
    color: #ff3333;
  }
`;
