import styled from 'styled-components';
import logo from '../../assets/jobs/logoHertz.jpg';

export const Container = styled.div`
  background-color: #fff;
  padding: 40px 30px 25px;

  h1 {
    text-align: center;
    font-size: 70px;
    font-weight: 200;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const AddressHertzContainer = styled.div`
  margin-top: 50px;
  height: 600px;
  display: flex;
  background-color: #282828;
`;

export const LogoHertz = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  flex: 1;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const AddressHertz = styled.div`
  flex: 1;
  color: #eee;
  display: grid;
  justify-content: center;
  align-items: center;

  svg {
    font-weight: 900;
    font-size: 30px;
  }
  strong {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #777;
  }

  ul {
    list-style: none;
    li {
      text-align: center;
      span {
        display: block;
      }
      strong {
        display: block;
      }
    }
  }
  li + li {
    margin: 50px 0px;
  }
`;

export const FormContact = styled.form`
  margin-top: 30px;
  display: grid;
  justify-content: center;

  h3 {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 45px;
    font-size: 30px;
  }

  div {
    input {
      text-align: center;
      border: 1px solid #aaa;
      border-radius: 4px;
      height: 30px;
    }
  }

  div + div {
    input {
      width: 100%;
      margin-top: 10px;
    }
    textarea {
      margin-top: 10px;
      max-width: 392px;
      width: 100%;
      text-align: center;
      border: 1px solid #aaa;
      border-radius: 4px;
      height: 60px;
      font-size: 16px;
    }
  }

  button {
    font-size: 20px;
    margin-top: 10px;
    background-color: #2c4d7f;
    color: #fff;
  }

  @media (max-width: 535px) {
    div {
      display: grid;
      box-sizing: border-box;
      input {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
`;
