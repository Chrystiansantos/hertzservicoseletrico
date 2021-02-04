import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 665px) {
    display: grid;
    justify-content: center;
    align-items: center;
    /* 
    justify-content: center;
    align-items: center;
    width: 400px;
    background-color: red; */
  }
`;

export const Logo = styled(Link)`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #212529;

  @media (max-width: 665px) {
    margin: 20px 0px;
  }

  img {
    margin-right: 10px;
    width: 46px;
    height: 46px;
    border-radius: 28px;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    height: 20px;
  }

  li {
    cursor: pointer;
    padding-bottom: 30px;
    border-bottom: none;
    transition: 'border-bottom 4s linear';

    a {
      color: #212529;
      text-decoration: none;
      text-transform: none;
    }
  }

  li + li {
    margin-left: 10px;
  }

  li:hover {
    border-bottom: 2px solid black;
  }

  @media (max-width: 665px) {
    ul {
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
