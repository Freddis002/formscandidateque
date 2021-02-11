import React, {  } from "react";
import { Steps} from 'rsuite';

function Menu(props) {

    
  
   
  
    return(
        <div>
        <Steps current={props.changePage-1}>
          <Steps.Item title="Poste"  />
          <Steps.Item title="Souhait"  />
          <Steps.Item title="Cv" />
          <Steps.Item title="Expérience"  />
          <Steps.Item title="Compétence" />
        </Steps>
       <br/>
       
      </div>
    )
}

export default Menu;