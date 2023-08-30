import styled from "styled-components";

export const Container = styled.div`

  width: 450px;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, .2);
  color: #fff;
  border-radius: 10px;
  padding: 20px 40px;

  @media (max-width: 650px){
    width: 350px;
    padding: 20px 35px;
  }

  @media (max-width: 480px){
    width: 320px;
    padding: 15px 25px;
  }

  @media (max-width: 480px){
    width: 240px;
    padding: 15px 25px;
  }

  h1 {
    text-align: center;
    font-size: 1.3rem; /* 22px */
    margin: .2rem 0 1.500rem 0; /* 30px 0 20px 0 */

    @media (max-width: 650px){
      font-size: 1.0rem;
    }
  }

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.0rem; /* 20px */

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
      padding: 0.699rem 0.9375rem; /* 13px 15px */
      border: 0.0625rem solid #bbb; /* 1px */
      font-family: 'Poppins', sans-serif;
      outline: none;

      @media (max-width: 480px){
        &:placeholder{
          font-size: 5px;
        }        
      }
    }
  }

  .btn {
    margin: 1.5rem 0 1rem 0; /* 30px 0 */
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem; /* 16px */
    border: none;
    color: #fff;
    background: rgb(40, 108, 255);
    border-radius: 0.5rem; /* 8px */
    width: 100%;
    height: 2.8125rem; /* 45px */
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
