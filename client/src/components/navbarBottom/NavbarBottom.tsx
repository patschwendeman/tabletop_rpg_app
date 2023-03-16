import { FunctionComponent, ReactElement, useState } from "react";
import { Link } from 'react-router-dom';
import { Dicepage } from "../dicepage/Dicepage";

interface NavbarBottomProps {

    id: String
    
}



const NavbarBottom: FunctionComponent<NavbarBottomProps> = ({ id }): ReactElement => {

    const [showDice, setShowDice] = useState(false);


    const handleDicepage = () => {
        if (showDice === true) setShowDice(false);
        if (showDice === false) setShowDice(true);
    }
    return(
        <>
            <Dicepage showDice={ showDice } />
            <div className="diceOption" onClick= {handleDicepage}>
                <img src="../assets/dice_icon.svg"></img>   
            </div>
            <div className="navbarBottom">
            <Link className="navbarBottom__buttonSection" to= {`/${id}/general`}>
                <img src="../assets/generalIcon.svg"></img>    
            </Link>
            <Link className="navbarBottom__buttonSection" to={`/${id}/skill`}>
                <img src="../assets/skillicon.svg"></img>    
            </Link>
            <Link className="navbarBottom__buttonSection" to={`/${id}/equip`}>
                <img src="../assets/equipIcon.svg"></img>    
            </Link>
        </div>
        </>
        
    )
}

export { NavbarBottom };