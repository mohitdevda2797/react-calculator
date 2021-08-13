import React from "react";

class Button extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }
    
    render() {
        const color = this.props.orange ? 'btn-warning' : 'btn-light'
        const className = `btn btn-lg ${color} border border-secondary ${this.props.name === '0' ? 'col-6' : 'col-3'}`
        return (
            <button className={className} onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

class ButtonPanel extends React.Component {
    render() {
        return(
            <>
                <div className="row">
                    <Button name="AC" clickHandler={this.props.clickHandler}/>
                    <Button name="+/-" clickHandler={this.props.clickHandler}/>
                    <Button name="%" clickHandler={this.props.clickHandler}/>
                    <Button orange={true} name="÷" clickHandler={this.props.clickHandler}/>
                </div>
                <div className="row">
                    <Button name="7" clickHandler={this.props.clickHandler}/>
                    <Button name="8" clickHandler={this.props.clickHandler}/>
                    <Button name="9" clickHandler={this.props.clickHandler}/>
                    <Button orange={true} name="x" clickHandler={this.props.clickHandler}/>
                </div>
                <div className="row">
                    <Button name="4" clickHandler={this.props.clickHandler}/>
                    <Button name="5" clickHandler={this.props.clickHandler}/>
                    <Button name="6" clickHandler={this.props.clickHandler}/>
                    <Button orange={true} name="-" clickHandler={this.props.clickHandler}/>
                </div>
                <div className="row">
                    <Button name="1" clickHandler={this.props.clickHandler}/>
                    <Button name="2" clickHandler={this.props.clickHandler}/>
                    <Button name="3" clickHandler={this.props.clickHandler}/>
                    <Button orange={true} name="+" clickHandler={this.props.clickHandler}/>
                </div>
                <div className="row">
                    <Button name="0" clickHandler={this.props.clickHandler}/>
                    <Button name="." clickHandler={this.props.clickHandler}/>
                    <Button orange={true} name="=" clickHandler={this.props.clickHandler}/>
                </div>
            </>
        )
    }
}

export {ButtonPanel as default};