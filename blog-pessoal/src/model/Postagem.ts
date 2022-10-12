import Tema from "./Tema";
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null;
    user?: User | null;
}

export default Postagem;