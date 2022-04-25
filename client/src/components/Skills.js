import {React} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJquery } from "react-icons/si";



const Skills = () => {

    return (
<section className="skills">
    <h2 className="skills__header"></h2>
    < ul className="skills__list">
    <li className="skill"><DiReact/></li>
    <li className="skill"><DiJavascript1 /></li>
    <li className="skill"><DiMongodb /></li>
    <li className="skill"><AiFillHtml5 /></li>
    <li className="skill"><SiCss3 /></li>
    <li className="skill"><DiSass /></li>  
    <li className="skill"><BsFillBootstrapFill /></li>  
    <li className="skill"><SiJquery /></li>  

     
    </ul>
</section>
    )
} 

export default Skills