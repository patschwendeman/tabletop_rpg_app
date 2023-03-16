import axios from "axios";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



interface UpdateGeneralProps {

    



}

const UpdateGeneral: FunctionComponent<UpdateGeneralProps> = ({}): ReactElement => {

    const navigate = useNavigate();
    const params = useParams()

    const PlayerID = params.id;
    const Endpoint = "http://localhost:8000/general";

    

    //Hooks

    //Personal
    const [stateValue_1, setValue_1] = useState("");
    const [stateValue_2, setValue_2] = useState("");
    const [stateValue_3, setValue_3] = useState("");
    const [stateValue_4, setValue_4] = useState("");

    //Personal
    const [stateValue_5, setValue_5] = useState(0);
    const [stateValue_6, setValue_6] = useState(0);
    const [stateValue_7, setValue_7] = useState(0);
    const [stateValue_8, setValue_8] = useState(0);

    

    //Fetch Requests

    //Personal
    const fetchPersonal = async() => {
        const { data, status } = await axios.get(Endpoint + '/personal/read/' + PlayerID);
        setValue_1(data.info[0].personal.name);
        setValue_2(data.info[0].personal.race);
        setValue_3(data.info[0].personal.class);
        setValue_4(data.info[0].personal.religion);

    }

    //Passive
    const fetchPassive = async() => {
        const { data, status } = await axios.get(Endpoint + '/passive/read/' + PlayerID);
        setValue_5(data.info[0].passive.initiative);
        setValue_6(data.info[0].passive.honor);
        setValue_7(data.info[0].passive.parade);
        setValue_8(data.info[0].passive.moral);

    }

    //Update Funktion
    const updateGeneral = async() => {

        const newPersonal = {
            "name" : stateValue_1,
            "race" : stateValue_2,
            "class" : stateValue_3,
            "religion" : stateValue_4,
        }

        const newPassive = {
            "initiative" : stateValue_5,
            "honor" : stateValue_6,
            "parade" : stateValue_7,
            "moral" : stateValue_8,
        }

        const postPersonal = await axios.put(Endpoint + '/personal/update/' + PlayerID, newPersonal);
        const postPassive = await axios.put(Endpoint + '/passive/update/' + PlayerID, newPassive);

        if(postPersonal.status === 200 && postPassive.status === 200){
            console.log("uploaded general")
            fetchPersonal();
            fetchPassive();
        }
    }

    useEffect(() => {
        fetchPersonal();
        fetchPassive();
    }, []);

    return(
        <div className="updategeneral">
            <div className="updategeneral__form">
                <div className="updategeneral__form__headline">
                <div className="container__settings"></div>
                    <h2>Personal</h2>
                    <div onClick={() => navigate(-1)}>
                        <img className="container__settings"  src="../../assets/close.svg"></img>
                    </div> 
                </div>
                <div className="form_inputSection">
                    <div className="form_inputSection_form__input">
                        <p>Name: </p>
                        <input type="text" value={ stateValue_1 }  onChange={e => setValue_1(e.target.value)}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Rasse: </p>
                        <input type="text" value={ stateValue_2 } onChange={e => setValue_2(e.target.value)}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Klasse: </p>
                        <input type="text" value={ stateValue_3 } onChange={e => setValue_3(e.target.value)}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Religion: </p>
                        <input type="text" value={ stateValue_4 } onChange={e => setValue_4(e.target.value)}></input>
                    </div>  
                </div>
                <div className="updategeneral__form__headline--single">
              
                    <h2>Passive</h2>
                   
                </div>
                <div className="form_inputSection">
                    <div className="form_inputSection_form__input">
                        <p>Initiative: </p>
                        <input type="number" value={ stateValue_5 } onChange={e => setValue_5(Number(e.target.value))}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Ehre: </p>
                        <input type="number" value={ stateValue_6 } onChange={e => setValue_6(Number(e.target.value))}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Parade: </p>
                        <input type="number" value={ stateValue_7 } onChange={e => setValue_7(Number(e.target.value))}></input>
                    </div>
                    <div className="form_inputSection_form__input">
                        <p>Moral: </p>
                        <input type="number" value={ stateValue_8 } onChange={e => setValue_8(Number(e.target.value))}></input>
                    </div>                   
                </div>
                <button onClick={updateGeneral}>Save</button>
            </div>
        </div>
    );
    
}


export { UpdateGeneral };


