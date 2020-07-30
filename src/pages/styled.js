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
  background-color: #1a1a1a;
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
  width: 60%;
  height: 80%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 3px;
  background-color: #404040;
  transition-duration: 200ms;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;
