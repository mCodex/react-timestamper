import styled, { keyframes } from 'styled-components';

const formAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    animation: ${formAnimation} 2s;
    align-items: center;

    button {
      border-radius: 5px;
      height: 40px;
      color: #fff;
      margin: 30px 0 0 0;
      border: 2px solid #eb9932;
      background-color: #eb9932;
    }

    hr {
      border: 0.5px solid #ffffff50;
      align-self: stretch;
      margin: 20px 0;
    }

    span {
      & + span {
        font-weight: bold;
        font-size: 18px;
        text-decoration: underline;
        margin-top: 10px;
      }
    }
  }
`;
