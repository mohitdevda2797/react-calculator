import React from "react";
import Result from "./Result";
import ButtonPanel from "./ButtonPanel";
import calculate from "../functions/calculate";

export default class Container extends React.Component{
    state = {
        total: "0",
        previous: null,
        next: null,
        operation: null,
        history: null,
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName))
    }

    render() {
        return (
            <div className="container">
                <div className="py-2">
                    <Result value={this.state.total || ""} history={this.state.history || ""}/>
                    <ButtonPanel clickHandler={this.handleClick}/>
                </div>
            </div>
        )
    }
}