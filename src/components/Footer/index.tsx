import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import { Container, Links, Contacts } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Links>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/hertzservicoseletricos/"
              target="__blank"
            >
              <FaFacebookSquare />
              <strong>Facebook</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hertzserv.eletrico/?hl=pt-br"
              target="__blank"
            >
              <FaInstagram />
              <strong>Instagram</strong>
            </a>
          </li>
        </ul>
      </Links>

      <Contacts>
        <ul>
          <li>
            <strong>Endereco</strong>
            <span>Rua 2. Bairro Pinheiros</span>
            <span>Arcos - Minas Gerais</span>
          </li>
          <li>
            <strong>E-mail</strong>
            <span>hertzserv.eletrico@gmail.com</span>
          </li>
          <li>
            <strong>Contatos</strong>
            <span>(37) 9 9817 - 6382</span>
            <span>(37) 9 9125 - 0585</span>
          </li>
        </ul>
      </Contacts>
    </Container>
  );
};

export default Footer;
