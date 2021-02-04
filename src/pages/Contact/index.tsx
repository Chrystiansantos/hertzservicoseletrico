import React from 'react';
import { FaMapMarkerAlt, FaRegEnvelope, FaHeadset } from 'react-icons/fa';
import {
  Container,
  AddressHertzContainer,
  LogoHertz,
  AddressHertz,
  FormContact,
} from './styles';

const Contact: React.FC = () => (
  <Container>
    <h1>Contate-nos</h1>
    <h2>
      A empresa Hertz Serviços Elétricos deseja ajudá-lo para que você possa
      estar entrando em contato da forma mais rápida e fácil possível. Se você
      tem qualquer dúvida sobre o serviço, sobre a contratação ou
      características, não hesite em entrar em contato conosco.
    </h2>
    <AddressHertzContainer>
      <LogoHertz />
      <AddressHertz>
        <ul>
          <li>
            <FaMapMarkerAlt />
            <strong>Endereço</strong>
            <span>Rua 2. Bairro Pinheiros</span>
            <span>Arcos</span>
            <span>Minas Gerais</span>
          </li>

          <li>
            <FaRegEnvelope />
            <strong>E-mail</strong>
            <span>hertzserv.eletrico@gmail.com</span>
          </li>

          <li>
            <FaHeadset />
            <strong>Contato</strong>
            <span>(37) 9 9817 - 6382</span>
            <span>(37) 9 9125 - 0585</span>
          </li>
        </ul>
      </AddressHertz>
    </AddressHertzContainer>
    <FormContact>
      <h3>Contate-nos</h3>
      <div>
        <input style={{ marginRight: 10 }} type="text" placeholder="Telefone" />
        <input type="text" placeholder="Nome" />
      </div>
      <div>
        <input type="text" placeholder="Assunto" />
      </div>
      <div>
        <textarea placeholder="Fale conosco !" />
      </div>

      <button type="submit">Enviar !</button>
    </FormContact>
  </Container>
);

export default Contact;
