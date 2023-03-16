import { FunctionComponent, ReactElement, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Dice } from "../dice/Dice";

interface DicepageProps {
    
    showDice: any
}

const Dicepage: FunctionComponent<DicepageProps> = ({ showDice }): ReactElement => {
    
    const mockData: any = [];

    const [sum, setSum] = useState(0)
    
    const [diceQueue, setDiceQueue] = useState(mockData);

    const handleDice = (min: number, max: number) => {
        const number = min + Math.floor(Math.random() * (max - min + 1));
        setSum(() => 
            number+sum
        );

        const newDiceSafe = {
            id: uuidv4(),
            number: number
        }

        setDiceQueue(() => 
            [
                ...diceQueue,
                newDiceSafe
                
            ]
        );
     
    }

    const handleResetDice = () => {
        setSum(0)
        setDiceQueue(mockData)
    }
    
    if(showDice === true){
        return(
        
            <>
                <div className="dicepage">
                    <div className='dicepage--diceLibary'>
                        <img onClick={ () => handleDice( 1, 3) } className="dicepage--diceLibary__dice" src="../assets/w3.svg" alt="" />
                        <img onClick={ () => handleDice( 1, 6) } className="dicepage--diceLibary__dice" src="../assets/w6.svg" alt="" />
                        <img onClick={ () => handleDice( 1, 12) } className="dicepage--diceLibary__dice" src="../assets/w12.svg" alt="" />
                        <img onClick={ () => handleDice( 1, 20) } className="dicepage--diceLibary__dice" src="../assets/w20.svg" alt="" />
                        <img onClick={ () => handleDice( 1, 100) } className="dicepage--diceLibary__dice" src="../assets/w100.svg" alt="" />
                    </div>
                    <div className='dicepage--diceCounter'>
                            <p className='diceCounter__sum'>{ sum }</p>
                        </div>
                    <div className='dicepage--diceDisplay'>
                        <div className='diceDisplay__diceQueue'>
                           {diceQueue.map((element:any, index: number) => {
                               return(
                                   <Dice 
                                        key={ diceQueue[index].id.toString() }
                                        numb={diceQueue[index].number}
                                   />
                               )
                           })} 
                        </div>
                        <div className='diceDisplay__buttonSection'>
                            <button onClick={ () => handleResetDice( ) }>Reset</button>
                        </div>
                    
                    </div>
                    
                    
                </div>
            </>
        );
    }
    else {
        return (<></>);
    }
}

export { Dicepage }