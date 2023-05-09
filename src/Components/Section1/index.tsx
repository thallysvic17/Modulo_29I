import Titulo from "../SideBar/Titulo"
import Paragrafo from "../../Components/Paragrafos"
import { GithubSection } from "./styles"


const Section1 = () => (
    <section>
        <Titulo fontSize={16}>Sobre</Titulo>
        <Paragrafo tipo="secundario">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquam non praesentium enim placeat quidem dignissimos minus
        </Paragrafo>
        <GithubSection>
            <img src="https://github-readme-stats.vercel.app/api?username=thallysvic17&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="github"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thallysvic17&layout=compact&langs_count=7&theme=dracula" alt="github"/>
        </GithubSection>
    </section>
)

export default Section1