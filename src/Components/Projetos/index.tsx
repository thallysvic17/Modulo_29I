import Titulo from "../Titulo"
import {CardProjeto} from "./Cards-projetos"
import {CardList } from "./styles"

const Projetos = () => (

    <section>
        <Titulo fontSize={16}>Projetos</Titulo>
        <CardList>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
            <li>
                <CardProjeto />
            </li>
        </CardList>
    </section>
)
export default Projetos

