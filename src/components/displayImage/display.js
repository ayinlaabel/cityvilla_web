import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;
  width: 90%;
`;

export const Preview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    border-radius: 8px;
  }
`;

export const PreviewButtonBack = styled.div`
  height: 40px;
  width: 40px;
  background: #fff;
  position: absolute;
  left: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 35px;
  }
`;

export const ClosePreview = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
  p {
    font-size: 30px;
    font-weight: 500;
    color: #fff;
  }
`;

export const PreviewButtonFront = styled.div`
  height: 40px;
  width: 40px;
  background: #fff;
  position: absolute;
  right: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 35px;
  }
`;

export const DisplayImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0);
  z-index: 20;
  overflow: hidden;
  padding: auto;
`;
