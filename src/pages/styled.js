import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #0d0d0d;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 20%;
  color: #fff;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3%;
  width: 60%;
  height: 80%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  border: 1px dashed #262626;
  transition-duration: 200ms;

  :hover {
    border-color: #196619;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;
