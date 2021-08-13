import React from "react";

class Result extends React.Component{
    render() {
        return (
            <div className={'row rounded-3 py-4 bg-secondary text-white display-6'}>
                <div className="col-7 px-2"><span className="float-start">{this.props.history}</span></div>
                <div className="col-5 px-2"><span className="float-end">{this.props.value}</span></div>
            </div>
        )
    }
}

export {Result as default};