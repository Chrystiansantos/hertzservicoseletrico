import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Nav } from './styles';
import LogoImg from '../../assets/logoHertz.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo to="/">
        <>
          <img src={LogoImg} alt="Logo Hertz " />
          <strong>Hertz Serviços Elétricos</strong>
        </>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
