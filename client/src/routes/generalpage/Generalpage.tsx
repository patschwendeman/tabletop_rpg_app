import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import axios from 'axios';

import { NavbarBottom } from "../../components/navbarBottom/NavbarBottom";

import generalMock from "../../mockData/generalMock.json"
import { UpdateGeneral } from "../configpages/updateGeneral/UpdateGeneral";
import { Link } from "react-router-dom";

interface GeneralProps {

    _id: String,



}



const Generalpage: FunctionComponent<GeneralProps> = ({ _id }): ReactElement => {

    const personalMock = {
        "name": "Max",
        "race": "Musterork",
        "class": "Warrior",
        "religion": "none"
    }
    const passiveMock = {
        "honor": 99,
        "initiative": 99,
        "moral": 99,
        "parade": 99
    }

    //const personalMock = genralMock.general[0];
    //const passiveMock = generalMock.general[1].passive;

   

    const PlayerID = _id;
    const Endpoint = "http://localhost:8000/general";

    const [personal, setPersonal] = useState(personalMock);
    const [passive, setPassive] = useState(passiveMock);

    const fetchPersonal = async() => {
        const { data, status } = await axios.get(Endpoint + '/personal/read/' + PlayerID);
        setPersonal(data.info[0].personal);

    }
    const fetchPassive = async() => {
        const { data, status } = await axios.get(Endpoint + '/passive/read/' + PlayerID);
        setPassive(data.info[0].passive);
    }


    useEffect(() => {
        fetchPersonal();
        fetchPassive();
    }, []);

    return(
        <>
            <div className="generalpage">
                <img className="generalpage__avatarImg" src="./../assets/avatar.jpg" alt="Avatar Img" />  
                <div className="generalpage__container">
            
           
                <Link  to= {`/config/general/`+ PlayerID}>
                    <img className="container__settings" src="../assets/settingsIcon.svg"></img>   
                </Link>
                <h2>PERSONAL</h2> 
                <div className="container__settings"></div>
        
                <div className="generalpage__container__infoBox">
                    <p>Name:</p>
                    <hr className="generalpage__container__textLine"></hr>
                    <p>{ personal.name }</p>
                </div>
                <div className="generalpage__container__infoBox">
                    <p>Rasse:</p>
                    <hr className="generalpage__container__textLine"></hr>
                    <p>{ personal.race }</p>
                </div>
                <div className="generalpage__container__infoBox">
                    <p>Klasse:</p>
                    <hr className="generalpage__container__textLine"></hr>
                    <p>{ personal.class }</p>
                </div>
                <div className="generalpage__container__infoBox">
                    <p>Relligion:</p>
                    <hr className="generalpage__container__textLine"></hr>
                    <p>{ personal.religion }</p>
                </div>
                <div className="headLineSpace">
                    <h2>PASSIVE</h2>
                </div>
                
                
                    <div className="generalpage__container__skillBox">
                        <p>Initiative</p>
                        <p>{ passive.initiative }</p>  
                    </div>
                    <div className="generalpage__container__skillBox">
                        <p>Ehre</p>
                        <p>{passive.honor}</p>
                    </div>
                    <div className="generalpage__container__skillBox">
                        <p>Parade</p>
                        <p>{ passive.parade }</p>  
                    </div>
                    <div className="generalpage__container__skillBox">
                        <p>Moral</p>
                        <p>{ passive.moral }</p>  
                    </div>

            </div>
            </div>
            
            
            <NavbarBottom id={ PlayerID } />
        </>
    )
}

export { Generalpage }