import { FunctionComponent, ReactElement } from "react"

interface DiceProps {
    
    numb: number
}

const Dice: FunctionComponent<DiceProps> = ({  numb }): ReactElement => {
    return(
        <p className="dice">{numb}</p>
    )
}

export { Dice }