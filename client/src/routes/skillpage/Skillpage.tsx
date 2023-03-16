import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import axios from 'axios';
import { NavbarBottom } from "../../components/navbarBottom/NavbarBottom";
import { Link } from "react-router-dom";

interface SkillpageProps {

    _id: String,


}


const Skillpage: FunctionComponent<SkillpageProps> = ({ _id}): ReactElement => {

    const skillMock = 
        [
            {
                "main": 99,
                "skills": [
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "notskilling",
                        "value": 99
                    }
                ]  
            },
            {
                "main": 99,
                "skills": [
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    }
                ]  
            },
            {
                "main":99,
                "skills": [
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    },
                    {
                        "name": "skill",
                        "value": 99
                    }
                ]  
            }
        ];
    

    const PlayerID = _id;
    const Endpoint = "http://localhost:8000/skill";

    const [skill, setSkill] = useState(skillMock);

    const fetchSkill = async() => {
        const { data, status } = await axios.get(Endpoint + '/read/' + PlayerID);
        setSkill(data.skills);
    }

    useEffect(() => {
       fetchSkill();
    }, []);

    return(
        <>
            <div className="skillpage">
                <h1>SKILLS</h1>
                <div className="skillpage__container">
                    <Link  to= {`/config/skill/`+ PlayerID}>
                        <img className="container__settings" src="../assets/settingsIcon.svg"></img>   
                    </Link>
                    <h2>ACTION: { skill[0].main }</h2>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[0].skills[0].name }</p>
                        <p>{ skill[0].skills[0].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[0].skills[1].name }</p>
                        <p>{ skill[0].skills[1].value }</p> 
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[0].skills[2].name }</p>
                        <p>{ skill[0].skills[2].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[0].skills[3].name }</p>
                        <p>{ skill[0].skills[3].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[0].skills[4].name }</p>
                        <p>{ skill[0].skills[4].value }</p> 
                    </div>
                    <div className="headLineSpace">
                        <h2>KNOWELEDGE: { skill[1].main }</h2>
                    </div>                   
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[1].skills[0].name }</p>
                        <p>{ skill[1].skills[0].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[1].skills[1].name }</p>
                        <p>{ skill[1].skills[1].value }</p> 
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[1].skills[2].name }</p>
                        <p>{ skill[1].skills[2].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[1].skills[3].name }</p>
                        <p>{ skill[1].skills[3].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[1].skills[4].name }</p>
                        <p>{ skill[1].skills[4].value }</p> 
                    </div>
                    <div className="headLineSpace">
                        <h2>SOCIAL: { skill[2].main }</h2>
                    </div>                 
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[2].skills[0].name }</p>
                        <p>{ skill[2].skills[0].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[2].skills[1].name }</p>
                        <p>{ skill[2].skills[1].value }</p> 
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[2].skills[2].name }</p>
                        <p>{ skill[2].skills[2].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[2].skills[3].name }</p>
                        <p>{ skill[2].skills[3].value }</p>  
                    </div>
                    <div className="skillpage__container__skillBox">
                        <p>{ skill[2].skills[4].name }</p>
                        <p>{ skill[2].skills[4].value }</p> 
                    </div>


                </div>
            </div>
            <NavbarBottom id={ PlayerID }  />
        </>
    )
}

export { Skillpage }

