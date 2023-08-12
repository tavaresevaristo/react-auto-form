import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  border: none;
  border-radius: 1.25rem; /* 20px */
  background: rgba(255, 255, 255, 0.6); /* Branco com 50% de opacidade */
  width: 30rem;
  justify-content: center;

  .title {
    text-align: center;
    font-size: .7rem; /* 22px */
    margin: 1.875rem 0 1.25rem 0; /* 30px 0 20px 0 */
  }

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem; /* 20px */

    p {
      font-size: 0.75rem; /* 12px */
      font-family: 'Poppins', sans-serif;
      color: red;
      margin-top: 0.1875rem; /* 3px */
      margin-left: 0.3125rem; /* 5px */
    }

    input {
      width: 100%;
      border-radius: 0.625rem; /* 10px */
      border: none;
      background: transparent;
      padding: 0.8125rem 0.9375rem; /* 13px 15px */
      border: 0.0625rem solid #aaa; /* 1px */
      font-family: 'Poppins', sans-serif;
      outline: none;
    }
  }

  .btn {
    margin: 1.875rem 0; /* 30px 0 */
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem; /* 16px */
    border: none;
    color: #fff;
    background: rgb(40, 108, 255);
    border-radius: 0.5rem; /* 8px */
    width: 100%;
    height: 2.8125rem; /* 45px */

    &:hover {
      opacity: 0.9;
    }
  }
`;
