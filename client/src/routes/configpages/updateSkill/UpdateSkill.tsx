import axios from "axios";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSkill:FunctionComponent = ():ReactElement => {

    const navigate = useNavigate();
    const params = useParams()

    const Endpoint = "http://localhost:8000/skill";
    const PlayerID = params.id;


    //Hooks

    //Action
    const [mainValue_1, setMainValue_1] = useState(0);

    const [stateName_1, setName_1] = useState("none");
    const [stateValue_1, setValue_1] = useState(0);
    const [stateName_2, setName_2] = useState("none");
    const [stateValue_2, setValue_2] = useState(0);
    const [stateName_3, setName_3] = useState("none");
    const [stateValue_3, setValue_3] = useState(0);
    const [stateName_4, setName_4] = useState("none");
    const [stateValue_4, setValue_4] = useState(0);
    const [stateName_5, setName_5] = useState("none");
    const [stateValue_5, setValue_5] = useState(0);

    //Knoweledge
    const [mainValue_2, setMainValue_2] = useState(0);

    const [stateName_6, setName_6] = useState("none");
    const [stateValue_6, setValue_6] = useState(0);
    const [stateName_7, setName_7] = useState("none");
    const [stateValue_7, setValue_7] = useState(0);
    const [stateName_8, setName_8] = useState("none");
    const [stateValue_8, setValue_8] = useState(0);
    const [stateName_9, setName_9] = useState("none");
    const [stateValue_9, setValue_9] = useState(0);
    const [stateName_10, setName_10] = useState("none");
    const [stateValue_10, setValue_10] = useState(0);

    //Social
    const [mainValue_3, setMainValue_3] = useState(0);

    const [stateName_11, setName_11] = useState("none");
    const [stateValue_11, setValue_11] = useState(0);
    const [stateName_12, setName_12] = useState("none");
    const [stateValue_12, setValue_12] = useState(0);
    const [stateName_13, setName_13] = useState("none");
    const [stateValue_13, setValue_13] = useState(0);
    const [stateName_14, setName_14] = useState("none");
    const [stateValue_14, setValue_14] = useState(0);
    const [stateName_15, setName_15] = useState("none");
    const [stateValue_15, setValue_15] = useState(0);



    

    const fetchSkill = async() => {
        const { data, status } = await axios.get(Endpoint + '/read/' + PlayerID);

        
        setMainValue_1(data.skills[0].main);

        setName_1(data.skills[0].skills[0].name);
        setValue_1(data.skills[0].skills[0].value)
        setName_2(data.skills[0].skills[1].name);
        setValue_2(data.skills[0].skills[1].value)
        setName_3(data.skills[0].skills[2].name);
        setValue_3(data.skills[0].skills[2].value)
        setName_4(data.skills[0].skills[3].name);
        setValue_4(data.skills[0].skills[3].value)
        setName_5(data.skills[0].skills[4].name);
        setValue_5(data.skills[0].skills[4].value)


        setMainValue_2(data.skills[1].main);

        setName_6(data.skills[1].skills[0].name);
        setValue_6(data.skills[1].skills[0].value)
        setName_7(data.skills[1].skills[1].name);
        setValue_7(data.skills[1].skills[1].value)
        setName_8(data.skills[1].skills[2].name);
        setValue_8(data.skills[1].skills[2].value)
        setName_9(data.skills[1].skills[3].name);
        setValue_9(data.skills[1].skills[3].value)
        setName_10(data.skills[1].skills[4].name);
        setValue_10(data.skills[1].skills[4].value)


        setMainValue_3(data.skills[2].main);
               
        setName_11(data.skills[2].skills[0].name);
        setValue_11(data.skills[2].skills[0].value)
        setName_12(data.skills[2].skills[1].name);
        setValue_12(data.skills[2].skills[1].value)
        setName_13(data.skills[2].skills[2].name);
        setValue_13(data.skills[2].skills[2].value)
        setName_14(data.skills[2].skills[3].name);
        setValue_14(data.skills[2].skills[3].value)
        setName_15(data.skills[2].skills[4].name);
        setValue_15(data.skills[2].skills[4].value)

    }

    const updateSkill = async() => {

        const newSkill = [
            {
                "main": mainValue_1,
                "skills": [
                    {
                        "name": stateName_1,
                        "value": stateValue_1
                    },
                    {
                        "name": stateName_2,
                        "value": stateValue_2
                    },
                    {
                        "name": stateName_3,
                        "value": stateValue_3
                    },
                    {
                        "name": stateName_4,
                        "value": stateValue_4
                    },
                    {
                        "name": stateName_5,
                        "value": stateValue_5
                    }
                ]  
            },
            {
                "main": mainValue_2,
                "skills": [
                    {
                        "name": stateName_6,
                        "value": stateValue_6
                    },
                    {
                        "name": stateName_7,
                        "value": stateValue_7
                    },
                    {
                        "name": stateName_8,
                        "value": stateValue_8
                    },
                    {
                        "name": stateName_9,
                        "value": stateValue_9
                    },
                    {
                        "name": stateName_10,
                        "value": stateValue_10
                    }
                ]  
            },
            {
                "main": mainValue_3,
                "skills": [
                    {
                        "name": stateName_11,
                        "value": stateValue_11
                    },
                    {
                        "name": stateName_12,
                        "value": stateValue_12
                    },
                    {
                        "name": stateName_13,
                        "value": stateValue_13
                    },
                    {
                        "name": stateName_14,
                        "value": stateValue_14
                    },
                    {
                        "name": stateName_15,
                        "value": stateValue_15
                    }
                ]  
            }
        ]

        const { data, status } = await axios.put(Endpoint + '/update/' + PlayerID, newSkill);

        if (status === 200){
            console.log("uploaded skills");
            fetchSkill();
        }
        
    }

    useEffect(() => {
        fetchSkill();
        
    }, []);


    return(
        <div className="updateskill">
            <div className="updateskill__form__headline">
                <div className="container__settings"></div>
                <h2>Skill</h2>
                <div onClick={() => navigate(-1)}>
                    <img className="container__settings"  src="../../assets/close.svg"></img>
                </div>        
            </div>
            <div className="updateskill__form">
                
                <div className="form_inputSection">
                    <div className="form_inputSection__row--main">
                        <div className="row__nameSection--main">
                            <p>Action: </p>
                        </div>
                        <div className="row_valueSection--main">
                            <input className="input--numb" type="text" value={ mainValue_1}  onChange={e => setMainValue_1(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_1 } onChange={e => setName_1(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_1}  onChange={e => setValue_1(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_2 } onChange={e => setName_2(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_2}  onChange={e => setValue_2(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_3 } onChange={e => setName_3(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb"  type="text" value={ stateValue_3}  onChange={e => setValue_3(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_4 } onChange={e => setName_4(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_4}  onChange={e => setValue_4(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_5 } onChange={e => setName_5(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_5}  onChange={e => setValue_5(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row--main">
                        <div className="row__nameSection--main">
                            <p>Knoweledge: </p>
                        </div>
                        <div className="row_valueSection--main">
                            <input className="input--numb" type="text" value={ mainValue_2}  onChange={e => setMainValue_2(Number(e.target.value))}></input>
                        </div>
                    </div>
                   
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_6 } onChange={e => setName_6(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_6 }  onChange={e => setValue_6(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_7 } onChange={e => setName_7(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_7 }  onChange={e => setValue_7(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_8 } onChange={e => setName_8(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_8}  onChange={e => setValue_8(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_9 } onChange={e => setName_9(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_9}  onChange={e => setValue_9(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_10 } onChange={e => setName_10(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_10}  onChange={e => setValue_10(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row--main">
                        <div className="row__nameSection--main">
                            <p>Social: </p>
                        </div>
                        <div className="row_valueSection--main">
                            <input className="input--numb" type="text" value={ mainValue_3}  onChange={e => setMainValue_3(Number(e.target.value))}></input>
                        </div>
                    </div>
                    
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_11 } onChange={e => setName_11(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_11}  onChange={e => setValue_11(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_12} onChange={e => setName_12(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_12}  onChange={e => setValue_12(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_13} onChange={e => setName_13(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_13}  onChange={e => setValue_13(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_14} onChange={e => setName_14(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_14}  onChange={e => setValue_14(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ stateName_15} onChange={e => setName_15(e.target.value)}></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ stateValue_15}  onChange={e => setValue_15(Number(e.target.value))}></input>
                        </div>
                    </div>
                </div>
                



                
                

            </div>
            <button onClick={updateSkill}>Save</button>
        </div>
    );
}

export { UpdateSkill }