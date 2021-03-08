import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
    };
    style = {
        fontSize:50,
        fondWeight:'bold',
    }
    render() { 
        return (
        <React.Fragment>
            <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Incremenet</button>
        </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count == 0 ? 'Zero' : 'love';
    }

}
 
export default Counter;