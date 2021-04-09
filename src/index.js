import React from "react";
import ReactDOM from "react-dom";
import GaugeComponent from "./components/GaugeComponent";

const App = () => {
    return (
        <div>
            <GaugeComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
