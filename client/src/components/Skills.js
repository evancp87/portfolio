import {React} from "react";
import Skill from './Skill';
import {SkillInfo} from '../skillsData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { DiJavascript1 } from "react-icons/di";
// import { DiReact } from "react-icons/di";
// import { DiMongodb } from "react-icons/di";
// import { AiFillHtml5 } from "react-icons/ai";
// import { SiCss3 } from "react-icons/si";
// import { DiSass } from "react-icons/di";
// import { BsFillBootstrapFill } from "react-icons/bs";
// import { SiJquery } from "react-icons/si";



const Skills = () => {

   

    return (
<section className="skills">
    <div className="skills__header">

    <h2 >Skills</h2>
    </div>
    {/* < ul className="skills__list">
    <li className="skill"><DiReact/></li>
    <li className="skill"><DiJavascript1 /></li>
    <li className="skill"><DiMongodb /></li>
    <li className="skill"><AiFillHtml5 /></li>
    <li className="skill"><SiCss3 /></li>
    <li className="skill"><DiSass /></li>  
    <li className="skill"><BsFillBootstrapFill /></li>  
    <li className="skill"><SiJquery /></li>   */}
<ul className="skills__list">
    {SkillInfo.map((skill) => 
    <Skill
    image={skill.image}
    title={skill.title}
    description={skill.description}
    
    
    />
    
    )}

    {/* <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/bootstrap.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/css.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/html-5.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/javascript.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/nodejs.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/react.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>  
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/sass.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>  
    <li className="skills__item"><img 
    className="skills__icon"
            // style={skill}
            src={require("../assets/Images/mongo-db.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li>
            <li className="skills__item"><img 
            className="skills__icon"
            // style={skill}
            src={require("../assets/Images/sql.png")}
            alt="Evan Parker avatar"
            // className="face front"
          /></li> */}
     
    </ul>
</section>
    )
} 

export default Skills