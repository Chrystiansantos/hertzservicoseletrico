import React, { useCallback, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaRegEnvelope, FaHeadset } from 'react-icons/fa';
import {
  // ModalProvider,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal';
import FirebaseService from '../../service/FirebaseService';
import { IFormContact } from '../../service/FirebaseService';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import {
  Container,
  AddressHertzContainer,
  LogoHertz,
  AddressHertz,
  FormContact,
  Remetente,
  Modal,
  ModalContext,
} from './styles';

const Contact: React.FC = () => {
  const formRef = useRef(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [messageModal, setMessageModal] = useState<string>('');
  const [contactSend, setContactSend] = useState<boolean>(true);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const submitForm = useCallback(
    async (formData: IFormContact, { reset }) => {
      try {
        setDisabledButton(true);
        await FirebaseService.pushData({
          nome: formData.nome,
          assunto: formData.assunto,
          mensage: formData.mensage,
          telefone: formData.telefone,
        });

        reset();
        openModal();
        setMessageModal(
          'Contato enviado com sucesso o mais breve possivel entraremos em contato !',
        );
        setContactSend(true);
      } catch (error) {
        setMessageModal(
          'Ocorreu um erro ao enviar o contato, tente novamente dentro de alguns intantes, por favor !',
        );
        setContactSend(false);
      } finally {
        setDisabledButton(false);
      }
    },
    [openModal],
  );

  return (
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
      <FormContact
        ref={formRef}
        onSubmit={submitForm}
        disabledbutton={Number(disabledButton)}
      >
        <h3>Contate-nos</h3>
        <Remetente>
          <Input
            styleInline={{ marginRight: 10 }}
            name="telefone"
            placeholder="Telefone"
          />
          <Input name="nome" placeholder="Nome" />
        </Remetente>
        <div>
          <Input name="assunto" placeholder="Assunto" />
        </div>
        <div>
          <TextArea name="mensage" placeholder="Fale conosco!" />
        </div>

        <button disabled={disabledButton} type="submit">
          Enviar !
        </button>
      </FormContact>

      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen}
        transition={ModalTransition.TOP_DOWN}
      >
        <ModalContext contactSendSuccess={contactSend}>
          <h3>{messageModal}</h3>
          <button type="button" onClick={closeModal}>
            Fechar
          </button>
        </ModalContext>
      </Modal>
    </Container>
  );
};

export default Contact;
