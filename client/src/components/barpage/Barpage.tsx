import axios from "axios";
import { FunctionComponent, ReactElement, useState } from "react";

interface BarpageProps {

    id:String
    bar:any
    configBar: number,
    handleBarpage: any
    fetchBar: any


}

const Barpage:FunctionComponent<BarpageProps> = ({id, bar, configBar, handleBarpage, fetchBar }):ReactElement => { 

   let name: String = "";
   let index: number = configBar -1;
   const Endpoint = "http://localhost:8000/equip/bar";

   let updateBar = 
    {"bar": [
        {
          "max" :  bar[0].max,
          "current" :  bar[0].current,
        },
        {
            "max" :  bar[1].max,
            "current" :  bar[1].current,
        },
        {
            "max" :  bar[2].max,
            "current" :  bar[2].current,
        },
      ]}
  



   const [newValue, setNewValue] = useState(0);
   const [operationValue, setOperationValue] = useState(0);
   const [input, setInput] = useState("");


   const handleInput = (e:any) => {
    setInput(e);
    setOperationValue(Number(e));

   }

   


  const handleNewValue = async(operation:number) => {


    if (operation === 1) {
        console.log(bar[index].current, operationValue)
        if((operationValue + bar[index].current ) >= bar[index].max) { 
            //setNewValue(bar[index].max)
            updateBar.bar[index].current = bar[index].max
            console.log("Ergebnis:" + newValue)
        }
        else{
            //setNewValue(bar[index].current + operationValue)
            updateBar.bar[index].current = bar[index].current + operationValue
            console.log("Ergebnis:" +newValue)
        }
        
        const { data, status } = await axios.put(Endpoint + '/update/' + id, updateBar);

        if (status === 200){
            console.log("uploaded skills");
            fetchBar();
        }
    }
    if (operation === 2) {
        console.log(bar[index].current, operationValue)
        if((bar[index].current - operationValue) <= 0) { 
            //setNewValue(0)
            updateBar.bar[index].current = 0;
            console.log("Ergebnis false:" +newValue)
        }
        else{
            //setNewValue(bar[index].current - operationValue)
            updateBar.bar[index].current = bar[index].current - operationValue
            console.log("Ergebnis:" + newValue)
        }
        
        const { data, status } = await axios.put(Endpoint + '/update/' + id, updateBar);

        if (status === 200){
            console.log("uploaded skills");
            fetchBar();
        }
    }
    if (operation === 3) {
        updateBar.bar[index].current = updateBar.bar[index].max;

        const { data, status } = await axios.put(Endpoint + '/update/' + id, updateBar);
        if (status === 200){
            console.log("uploaded skills");
            fetchBar();
        }
    }
}







    if(configBar === 1) name = "Life: ";
    if(configBar === 2) name = "Armor: ";
    if(configBar === 3) name = "Mana: ";

    

    if(configBar != 0){
        
        return(
            <div className="barpage">
                <div className="barpage__container">
                    <img onClick={() => handleBarpage(0)} src="./../assets/close.svg" alt="Avatar Img" /> 
                    <div className="barpage__container--inputSection">
                        <p>Type in Number of DMG/Heal</p>
                        <input type="number" value={input} onChange={e => handleInput(e.target.value)} className="barpage__container--inputSection__input" />
                    </div>
                    <div className={"barpage__container--barSection--" + index}>
                        <p>{name} </p>
                        <p>{bar[index].current}/{bar[index].max}</p>                     
                    </div>
                    <div className="barpage__container--buttonSection">
                        <button onClick={ () => handleNewValue  (3) }>FULL</button>
                        <button onClick={ () => handleNewValue  (1) }>+</button>
                        <button onClick={ () => handleNewValue  (2) }>-</button>
                    </div>
                    
                </div>
            </div>
        );
    }
    else{
        return(<></>);
    }
    
 }

 export { Barpage }