import axios from "axios";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEquip: FunctionComponent = (): ReactElement => { 

    const navigate = useNavigate();
    const params = useParams();

    const Endpoint = "http://localhost:8000/equip";
    const PlayerID = params.id;

    const [ArmorName_1, setArmorName_1] = useState("");
    const [ArmorValue_1, setArmorValue_1] = useState(0);
    const [ArmorName_2, setArmorName_2] = useState("");
    const [ArmorValue_2, setArmorValue_2] = useState(0);
    const [ArmorName_3, setArmorName_3] = useState("");
    const [ArmorValue_3, setArmorValue_3] = useState(0);
    const [ArmorName_4, setArmorName_4] = useState("");
    const [ArmorValue_4, setArmorValue_4] = useState(0);

    const [WeaponName_1, setWeaponName_1] = useState("");
    const [WeaponValue_1, setWeaponValue_1] = useState(0);
    const [WeaponName_2, setWeaponName_2] = useState("");
    const [WeaponValue_2, setWeaponValue_2] = useState(0);
    const [WeaponName_3, setWeaponName_3] = useState("");
    const [WeaponValue_3, setWeaponValue_3] = useState(0);

    const [BagName_1, setBagName_1] = useState("");
    const [BagValue_1, setBagValue_1] = useState(0);
    const [BagName_2, setBagName_2] = useState("");
    const [BagValue_2, setBagValue_2] = useState(0);

    

    const fetchArmor = async() =>{
        const { data, status } = await axios.get(Endpoint + '/armor/read/' + PlayerID);
        setArmorName_1(data.armor[0].name);
        setArmorValue_1(data.armor[0].value);
        setArmorName_2(data.armor[1].name);
        setArmorValue_2(data.armor[1].value);
        setArmorName_3(data.armor[2].name);
        setArmorValue_3(data.armor[2].value);
        setArmorName_4(data.armor[3].name);
        setArmorValue_4(data.armor[3].value);
    }
    const fetchWeapon = async() =>{
        const { data, status } = await axios.get(Endpoint + '/weapon/read/' + PlayerID);
        setWeaponName_1(data.weapon[0].name);
        setWeaponValue_1(data.weapon[0].value);
        setWeaponName_2(data.weapon[1].name);
        setWeaponValue_2(data.weapon[1].value);
        setWeaponName_3(data.weapon[2].name);
        setWeaponValue_3(data.weapon[2].value);
    }
    const fetchBag = async() =>{
        const { data, status } = await axios.get(Endpoint + '/bag/read/' + PlayerID);
        setBagName_1(data.bag[0].name);
        setBagValue_1(data.bag[0].value);
        setBagName_2(data.bag[1].name);
        setBagValue_2(data.bag[1].value);
    }

    const updateArmor = async() => {

        const newArmor = {
            "armor": [
                {
                    "name": ArmorName_1,
                    "value": ArmorValue_1
                },
                {
                    "name": ArmorName_2,
                    "value": ArmorValue_2
                },
                {
                    "name": ArmorName_3,
                    "value": ArmorValue_3
                },
                {
                    "name": ArmorName_4,
                    "value": ArmorValue_4
                },
                
            ]
        }
        const { data, status } = await axios.put(Endpoint + '/armor/update/' + PlayerID, newArmor);

        if (status === 200){
            console.log("uploaded Armor");
            fetchArmor();
        }

    }

    const updateWeapon = async() => {

        const newWeapon = {
            "weapon": [
                {
                    "name": WeaponName_1,
                    "value": WeaponValue_1
                },
                {
                    "name": WeaponName_2,
                    "value": WeaponValue_2
                },
                {
                    "name": WeaponName_3,
                    "value": WeaponValue_3
                }
           
                
            ]
        }
        const { data, status } = await axios.put(Endpoint + '/weapon/update/' + PlayerID, newWeapon);

        if (status === 200){
            console.log("uploaded Weapons");
            fetchArmor();
        }

    }

    const updateBag = async() => {

        const newBag = {
            "bag": [
                {
                    "name": BagName_1,
                    "value": BagValue_1
                },
                {
                    "name": BagName_2,
                    "value": BagValue_2
                }
           
                
            ]
        }
        const { data, status } = await axios.put(Endpoint + '/bag/update/' + PlayerID, newBag);

        if (status === 200){
            console.log("uploaded Weapons");
            fetchArmor();
        }

    }

    const update = ()  => {
        updateArmor();
        updateWeapon();
        updateBag();
        
    }

    

    useEffect(() => {
        fetchArmor();
        fetchWeapon();
        fetchBag();
        
    }, []);

    return(
        <div className="updateEquip">
            <div className="updateEquip__form__headline">
                <div className="container__settings"></div>
                <h2>Equip</h2>
                <div onClick={() => navigate(-1)}>
                    <img className="container__settings"  src="../../assets/close.svg"></img>
                </div>        
            </div>
            <div className="updatesEquip__form">
                <div className="form_inputSection">
                    <h2>Armor: </h2>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text"  value={ ArmorName_1 } onChange={ (e) => setArmorName_1(e.target.value) } ></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text"  value={ ArmorValue_1} onChange={ (e) => setArmorValue_1(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text"  value={ ArmorName_2 } onChange={ (e) => setArmorName_2(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text"  value={ ArmorValue_2} onChange={ (e) => setArmorValue_2(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text"  value={ ArmorName_3 } onChange={ (e) => setArmorName_3(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text"  value={ ArmorValue_3} onChange={ (e) => setArmorValue_3(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text"  value={ ArmorName_4 } onChange={ (e) => setArmorName_4(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text"  value={ ArmorValue_4} onChange={ (e) => setArmorValue_4(Number(e.target.value)) }></input>
                        </div>
                    </div>


                    <h2>Weapons: </h2>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ WeaponName_1 } onChange={ (e) => setWeaponName_1(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ WeaponValue_1} onChange={ (e) => setWeaponValue_1(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ WeaponName_2 } onChange={ (e) => setWeaponName_2(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ WeaponValue_2} onChange={ (e) => setWeaponValue_2(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ WeaponName_3 } onChange={ (e) => setWeaponName_3(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ WeaponValue_3} onChange={ (e) => setWeaponValue_3(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    

                    <h2>Bag: </h2>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ BagName_1 } onChange={ (e) => setBagName_1(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ BagValue_1} onChange={ (e) => setBagValue_1(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    <div className="form_inputSection__row">
                        <div className="row__nameSection--skill">
                            <input className="input--text" type="text" value={ BagName_2 } onChange={ (e) => setBagName_2(e.target.value) }></input>
                        </div>
                        <div className="row_valueSection">
                            <input className="input--numb" type="text" value={ BagValue_2}  onChange={ (e) => setBagValue_2(Number(e.target.value)) }></input>
                        </div>
                    </div>
                    
                       
                    </div>
                
            </div>
            <button onClick={update}>Save</button>
        </div>
    );
 }

 export { UpdateEquip }