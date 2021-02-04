import styled from 'styled-components';

interface IImagem {
  imagem: string;
}

export const Container = styled.div`
  background-color: #fff;
  padding: 0px 30px;
`;

export const Header = styled.header`
  padding-top: 40px;
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 70px;
    font-weight: 200;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  padding-bottom: 25px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }
`;

export const ImagesJob = styled.section<IImagem>`
  /* background-color: red; */
  /* img { */
  /* position: absolute; */
  margin: 4px;
  > div {
    /* position: absolute; */
    width: 100%;
    height: 400px;
    background-image: url(${props => props.imagem});
    background-position: center;
    background-size: cover;

    /* &:hover {
      background-color: red;
    } */

    span {
      display: block;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
