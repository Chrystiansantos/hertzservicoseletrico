import { firebaseDatabase } from '../util/firebaseUtil';

export interface IFormContact {
  assunto: string;
  nome: string;
  telefone: string;
  mensage: string;
}

class FirebaseService {
  static pushData = async (
    formContact: IFormContact,
  ): Promise<string | null> => {
    const ref = firebaseDatabase.ref(process.env.REACT_APP_DATABASE).push();
    const id = firebaseDatabase.ref(process.env.REACT_APP_DATABASE).push().key;
    await ref.set(formContact);
    return id;
  };
}

export default FirebaseService;
