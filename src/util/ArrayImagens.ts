import imagem01 from '../assets/jobs/imagem01.jpeg';
import imagem02 from '../assets/jobs/imagem02.jpeg';
import imagem03 from '../assets/jobs/imagem03.jpeg';
import imagem04 from '../assets/jobs/imagem04.jpeg';
import imagem05 from '../assets/jobs/imagem05.jpeg';
import imagem06 from '../assets/jobs/Imagem06.jpeg';
import imagem07 from '../assets/jobs/imagem07.jpeg';
import imagem08 from '../assets/jobs/Imagem08.jpeg';

interface IArrayImagem {
  id: number;
  imagem: string;
}

const arrayImage: IArrayImagem[] = [
  { id: 1, imagem: imagem01 },
  { id: 2, imagem: imagem02 },
  { id: 3, imagem: imagem03 },
  { id: 4, imagem: imagem04 },
  { id: 5, imagem: imagem05 },
  { id: 6, imagem: imagem06 },
  { id: 7, imagem: imagem07 },
  { id: 8, imagem: imagem08 },
];

export default arrayImage;
