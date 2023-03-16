import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import axios from 'axios';
import { NavbarBottom } from "../../components/navbarBottom/NavbarBottom";
import { Barpage } from "../../components/barpage/Barpage";
import { Link } from "react-router-dom";


interface EquippageProps {

    _id: String,


}

const Equippage: FunctionComponent<EquippageProps> = ({ _id}): ReactElement => {

    const armorMock = [
        {
            "name" :  "none",
            "value" :  99,
          },
          {
            "name" :  "none",
            "value" :  99,
          },
          {
            "name" :  "none",
            "value" :  99,
          },
          {
            "name" :  "none",
            "value" :  99,
          }
    ];

    const barMock = [
        {
            "max" :  100,
            "current" :  100,
          },
          {
              "max" :  100,
              "current" :  100,
          },
          {
              "max" :  100,
              "current" :  10,
          },
    ];

    const weaponMock = [
            {
            "name" :  "none",
            "value" :  "4W20",
          },
          {
            "name" :  "none",
            "value" :  "4W20",
          },
          {
            "name" :  "none",
            "value" :  "4W20",
          }
    ];

    const bagMock = [
        {
            "name" :  "Gold",
            "value" :  300,
        },
        {
            "name" :  "Silver",
            "value" :  0,
        }
    ];

    const PlayerID = _id;
    const Endpoint = "http://localhost:8000/equip";

    const [armor, setArmor] = useState(armorMock)
    const [bar, setBar] = useState(barMock)
    const [weapon, setWeapon] = useState(weaponMock)
    const [bag, setbag] = useState(bagMock)

    const [configBar, setConfigBar] = useState(0)
    
    const fetchArmor = async() => {
        const { data, status } = await axios.get(Endpoint + '/armor/read/' + PlayerID);
        setArmor(data.armor);
    };
    const fetchBar = async() => {
        const { data, status } = await axios.get(Endpoint + '/bar/read/' + PlayerID);
        setBar(data.bar);
    }
    const fetchWeapon = async() => {
        const { data, status } = await axios.get(Endpoint + '/weapon/read/' + PlayerID);
        setWeapon(data.weapon)
        
    }
    const fetchBag = async() => {
        const { data, status } = await axios.get(Endpoint + '/bag/read/' + PlayerID);
        console.log(data.bag);
        
    }

    const handleBarpage = (i:number) => {
        setConfigBar(i)
    }


    useEffect(() => {
        fetchArmor();
        fetchBar();
        fetchWeapon();
        fetchBag();
    }, []);




    return(
        <>
            <div className="equippage">
                <h1>EQUIP</h1>
                <div className="equippage__container">
                    <Link  to= {`/config/equip/`+ PlayerID}>
                        <img className="container__settings" src="../assets/settingsIcon.svg"></img>   
                    </Link>
                    <h2>ARMOR</h2>
                    <div className="equippage__container--armorSection">
                        <div className="armorSection__row">

                            <div className="armorSection__row__item">
                               
                                <img src="./../assets/helmet.svg" alt="Avatar Img" />  
                                <p>{armor[0].name}</p>
                                <p>{armor[0].value}</p>
                            </div>

                            <div className="armorSection__row__item">
                                <img src="./../assets/chest.svg" alt="Avatar Img" />  
                                <p>{armor[1].name}</p>
                                <p>{armor[1].value}</p>
                            </div>
                        </div>
                        <div className="armorSection__row">
                            <div className="armorSection__row__item">
                                <img src="./../assets/pants.svg" alt="Avatar Img" />  
                                <p>{armor[2].name}</p>
                                <p>{armor[2].value}</p>
                            </div>
                            <div className="armorSection__row__item">
                                <img src="./../assets/leg.svg" alt="Avatar Img" />  
                                <p>{armor[3].name}</p>
                                <p>{armor[3].value}</p>
                            </div>
                        </div>

                    </div>
                    <h2>FIGHT</h2>
                    <div className="equippage__container--infoBox" onClick={() => handleBarpage(1)}>
                        <div className='infoBox__data'>
                            <p>Life</p>
                            <p>{bar[0].current}/{bar[0].max}</p> 
                        </div>
                        <hr className="textLine"></hr>
                        <div style={{width:(bar[0].max)/100 * bar[0].current + "%"}} className="infoBox__bar--life"></div>
                    </div>
                    <div className="equippage__container--infoBox" onClick={() => handleBarpage(2)}>
                        <div className='infoBox__data'>
                            <p>Armor</p>
                            <p>{bar[1].current}/{bar[1].max}</p> 
                        </div>
                        <hr className="textLine"></hr>
                        <div style={{width:(bar[1].max)/100 * bar[1].current + "%"}} className="infoBox__bar--armor"></div>
                    </div>
                    <div className="equippage__container--infoBox" onClick={() => handleBarpage(3)}>
                        <div className='infoBox__data'>
                            <p>Mana</p>
                            <p>{bar[2].current}/{bar[2].max}</p>
                        </div>
                        <hr className="textLine"></hr>
                        <div style={{width:(bar[2].max)/100 * bar[2].current + "%"}} className="infoBox__bar--mana"></div>
                    </div>

                    <hr className="textLine"></hr>

                    <div className="equippage__container--skillBox">
                        <p>{weapon[0].name}</p>
                        <p>{weapon[0].value}</p>
                    </div>
                    <div className="equippage__container--skillBox">
                        <p>{weapon[1].name}</p>
                        <p>{weapon[1].value}</p>
                    </div>
                    <div className="equippage__container--skillBox">
                        <p>{weapon[2].name}</p>
                        <p>{weapon[2].value}</p> 
                    </div>
                    <h2>BAG</h2>
                    <div className="equippage__container--bag">
                            <p>{bag[0].name}: {bag[0].value}</p>
                            <p>{bag[1].name}: {bag[1].value}</p>
                             
                    </div>
                    
                </div>
            </div>
            <Barpage id={ PlayerID } bar={bar} configBar={ configBar } handleBarpage={ handleBarpage } fetchBar={ fetchBar } />
            <NavbarBottom id={ PlayerID } />
        </>
        
    )
}

export { Equippage }