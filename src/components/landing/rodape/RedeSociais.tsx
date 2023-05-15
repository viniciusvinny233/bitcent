import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais(props: any) {
    return (
        <div className={`flex ${props.className ?? ''}`}>
            <RedeSocial icone={<IconBrandInstagram />} url="https://portfolio-vnx.vercel.app/" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/marcosvinicius-developer/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/viniciusvinny233" />
        </div>
    )
}