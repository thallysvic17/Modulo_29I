import Avatar from "../Avatar-SideBar"
import Paragrafo from "../Paragrafos"
import Titulo from "../Titulo"
import {Description, Button, SidebarContainer} from './styles'


type Props ={
    trocaTema: () => void;
}

const Sidebar = (props : Props) => (

    <aside>
        <SidebarContainer>
            <Avatar/>
            <Titulo fontSize={20}>Thallys Alves</Titulo>
            <Paragrafo tipo="principal" fontSize={16} >Thallysvic17</Paragrafo>
            <Description  tipo='secundario'fontSize={12}>Front-end project</Description>
            <Button onClick={props.trocaTema}>trocar tema</Button>
        </SidebarContainer>
    </aside>
)

export default Sidebar

