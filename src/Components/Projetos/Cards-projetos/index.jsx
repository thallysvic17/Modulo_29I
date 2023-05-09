import Paragrafo from "../../Paragrafos"
import Titulo from "../../Titulo"
import {StyleCard, LinkButton} from './styled'

 export const CardProjeto = () => (

    <StyleCard>
        <Titulo>Projeto Lista de Tarefas</Titulo>
        <Paragrafo tipo="primario">Lista de tarefas feita com ReactTS</Paragrafo>
        <LinkButton>Visualizar</LinkButton>
    </StyleCard>
)

