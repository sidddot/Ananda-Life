import './App2.css';
import NutriInfo from './components/NutriInfo';
import Nutri from './components/Nutri';
import {useState} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Day_info from './components/Day_info';
import Navbar from './compo/Navbar';

function NutriApp() {
    const [isVeg, setIsVeg] = useState(false);
    
    const { username } = useParams();

    console.log('Username me:', username);
    const u_n = username;
    console.log('username here is' ,u_n);

    const handleToggleChange = () => {
      console.log('Toggle clicked');
      setIsVeg(!isVeg);
    };
    return(
      <div class="nutri-body">
      <Navbar/>
        <NutriInfo/>
        <br/>
        <br/>
        <div>
          <h2 class="nvegu">NON-VEG / VEG</h2>
            <div class="toggle-checkbox"  >
              <div class="checkbox-apple"  >
              <input class="yep" id="check-apple" type="checkbox" defaultChecked={isVeg}  onChange={handleToggleChange}/>
                <label for="check-apple"></label>
              </div>
            </div>
          {/* <h2 class="vegu">VEG</h2> */}
        </div>


        <div class="place_nutri">
          <div class="left_nutri">
            <Nutri when="BREAKFAST" option={isVeg ? 'Veg' : 'Non-Veg'} user_name={u_n}/>
            <Nutri when="LUNCH" option={isVeg ? 'Veg' : 'Non-Veg'}  user_name={u_n}/>
            <Nutri when="DINNER" option={isVeg ? 'Veg' : 'Non-Veg'}  user_name={u_n}/>
          </div>
          <Day_info option={isVeg ? 'Veg' : 'Non-Veg'}  user_name={u_n}/>
        </div>
      </div>
    );
}

export default NutriApp;