import React from 'react';

import arrayImagens from '../../util/ArrayImagens';

import { Container, Header, GridImages, ImagesJob } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <h1>Hertz Serviços Elétricos </h1>
      <strong>
        A Hertz Serviços Elétricos, investe pesado para garantir o conforto para
        seus clientes, por este motivo está investindo em um novo espaço na
        Internet, para lhe atender. Oferecemos a nossos clientes conforto em
        nossas instalações além de um atendimento eficaz, seja via contato
        telefônico; através do envio de e-mails ou do preenchimento do
        formulário de contato deste site. Nossa Central de Atendimento ao
        Cliente está a disposição 24 horas por dia sete dias por semana.
      </strong>
    </Header>
    <GridImages>
      {arrayImagens.map(imagem => (
        <ImagesJob imagem={imagem.imagem} key={imagem.id}>
          <div>
            <span />
          </div>
        </ImagesJob>
      ))}
    </GridImages>
  </Container>
);

export default Home;
