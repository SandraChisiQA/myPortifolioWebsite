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

    const buttonText = 'clickme:';
    return(
        <div>
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