import React from "react";
import ReactDOM from "react-dom";

/*function App(){
    return (
        <div>
            <h3>My first react project</h3>
        </div>
    );
};

function getButttonText(){
    return 'click me now!';
}*/

const App = () =>{
   
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const buttonText = 'clickme:';

    if (hours < 12) {
    timeOfDay = "Morning"
   }

   else if(hours >= 12 && hours < 16){
    timeOfDay = "Afternoon"
   }

   else if(hours >= 16 && hours < 20){
    timeOfDay = "Evening"
   }

   else{
    timeOfDay = "Night"
   }


    return(
        <div >
            <h1 style={{color:"greenyellow"}} >
                Good {timeOfDay} to you !!!
            </h1>
        

        
            <h3>My first react project</h3>

            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />

            <button style={{backgroundColor:'red', color:'white'}}>
                {buttonText}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
);