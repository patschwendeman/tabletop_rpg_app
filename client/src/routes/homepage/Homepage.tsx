import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const Homepage: FunctionComponent = (): ReactElement => {


    return(
        <div className="homepage">
            
            <object className="homepage__diceSection" type="image/svg+xml" data="../assets/dice_icon_rotate.svg" width="200px">
                <img className="animatedDice" width="200px" src="../assets/dice_icon_rotate.svg"></img>
            </object>
            <div className="homepage__container">
                <Link className="homepage__container__link" to='/01/general'>
                    <p>Player 1</p>    
                </Link>
                <Link className="homepage__container__link" to='/02/general'>
                    <p>Player 2</p>     
                </Link>
                <Link className="homepage__container__link" to='/02/general'>
                    <p>Player 3</p>  
                </Link>
                <Link className="homepage__container__link" to='/04/general'>
                    <p>Player 4</p>  
                </Link>
            </div>
        </div>
    )
}

export { Homepage }