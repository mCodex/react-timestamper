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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: inherit;
    flex-direction: row;
    margin-bottom: 60px;
    align-items: center;

    div {
      margin-left: 15px;

      h1 {
        font-weight: bold;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    animation: ${formAnimation} 2s;
    align-items: center;

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
