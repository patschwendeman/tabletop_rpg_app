
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { UpdateEquip } from '../routes/configpages/updateEquip/UpdateEquip';
import { UpdateGeneral } from '../routes/configpages/updateGeneral/UpdateGeneral';
import { UpdateSkill } from '../routes/configpages/updateSkill/UpdateSkill';
import { Equippage } from '../routes/equippage/Equippage';
import { Generalpage } from '../routes/generalpage/Generalpage';
import { Homepage } from '../routes/homepage/Homepage';
import { Skillpage } from '../routes/skillpage/Skillpage';
import "../style/index.css";

function App() {

    

    return (
        <>
        <Router>        
            <div className="app">
                <Routes>
                    <Route path="/" element={ <Homepage /> } />
                    <Route path="/01/*" element={ 
                        <Navigate replace to="/01/general/"/> }
                    />
                        <Route path="/01/general/" element={ <Generalpage _id={ "01" }  /> } />
                        <Route path="/01/skill/" element={ <Skillpage _id={ "01" }  /> } />
                        <Route path="/01/equip/" element={ <Equippage _id={ "01" }  /> } />

                    <Route path="/02/*" element={ 
                        <Navigate replace to="/02/general/"/> }
                    />
                        <Route path="/02/general/" element={ <Generalpage _id={ "02" }  /> } />
                        <Route path="/02/skill/" element={ <Skillpage _id={ "02" }  /> } />
                        <Route path="/02/equip/" element={ <Equippage _id={ "02" }  /> } />

                    <Route path="/03/*" element={ 
                        <Navigate replace to="/03/general/"/> }
                    />
                        <Route path="/03/general/" element={ <Generalpage _id={ "03" }  /> } />
                        <Route path="/03/skill/" element={ <Skillpage _id={ "03" }  /> } />
                        <Route path="/03/equip/" element={ <Equippage _id={ "03" }  /> } />    

                    <Route path="/04/*" element={ 
                        <Navigate replace to="/04/general/"/> }
                    />
                        <Route path="/04/general/" element={ <Generalpage _id={ "04" }  /> } />
                        <Route path="/04/skill/" element={ <Skillpage _id={ "04" }  /> } />
                        <Route path="/04/equip/" element={ <Equippage _id={ "04" }  /> } />


                    <Route path="/config/*" element={ 
                        <Navigate replace to="/config/general/"/> }
                    />
                        <Route path="/config/general/:id" element={ <UpdateGeneral  /> } />
                        <Route path="/config/skill/:id" element={ <UpdateSkill  /> } />
                        <Route path="/config/equip/:id" element={ <UpdateEquip  /> } />
                        
                </Routes>
                </div>
        </Router>
        </>
    );
}

export default App;
