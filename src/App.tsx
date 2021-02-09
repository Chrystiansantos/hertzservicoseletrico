import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'react-simple-hook-modal';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import 'react-simple-hook-modal/dist/styles.css';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
