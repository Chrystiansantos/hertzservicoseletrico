import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 40px 30px 25px;
  text-align: center;

  h1 {
    font-size: 70px;
    font-weight: 200;
  }
  h2 {
    text-transform: uppercase;
    margin-top: 25px;
    font-size: 30px;
  }
  h3 {
    font-weight: 400;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;
