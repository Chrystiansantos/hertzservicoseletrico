import styled from 'styled-components';

export const Container = styled.footer`
  background: #212529;
  padding: 20px 20px;
`;

export const Links = styled.div`
  ul {
    display: flex;
    color: #eee;
    align-items: center;
    justify-content: center;
  }

  li {
    @media (max-width: 740px) {
      margin-bottom: 10px;
    }
    list-style: none;
    font-size: 20px;

    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 5px;
    }
  }

  li + li {
    margin-left: 10px;
  }
`;

export const Contacts = styled.div`
  color: white;
  @media (max-width: 740px) {
    margin: 0;
  }

  ul {
    flex: 1;
    list-style: none;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 740px) {
      display: block;
    }

    li {
      flex: 1;
      text-align: center;
      @media (max-width: 740px) {
        margin-bottom: 20px;
      }
      display: grid;
      justify-content: center;
      align-items: center;
      strong {
        display: block;
      }
      span {
        /* display: block; */
      }
    }
  }
`;
