import * as React from 'react';

export interface CounterButtonState {
    numberOfClick: number;
}

export default class CounterButton extends React.Component <{} , CounterButtonState> {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClick: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            numberOfClick: this.state.numberOfClick + 1
        });
    }

    render() { 
        return <button onClick={this.incrementCount}>{this.state.numberOfClick}</button>;
    }
}