import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.incrementCtr = this.incrementCtr.bind(this);
    }

    incrementCtr(){
        //console.log("u clicked on the button!!!");
        this.setState({
            counter: (this.state.counter) //+ (this.props.by)
        });
    }
    
    render(){
        return (
            <div className="counter">
            @@## my first reach js app :) !!!!###
            <CounterBtn by={1}/>
            <CounterBtn by={2}/>
            <CounterBtn by={5}/>
            <CounterBtn by={10}/>
            <CounterBtn/>
            </div>
         )
    }
}

class CounterBtn extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.incrementCtr = this.incrementCtr.bind(this);
    }
    
    render = () => {
        return(
            <div className="counter">
                {/* <i><h1>hi there from counter funct comp!!!!!</h1></i> */}
                <button onClick={this.incrementCtr}>
                    +{this.props.by}
                </button>
                <span className="count">
                    {this.state.counter}
                </span>
            </div>
        );
    }

    incrementCtr(){
        //console.log("u clicked on the button!!!");
        this.setState({
            counter: (this.state.counter) + (this.props.by)
        });
    }
}

CounterBtn.defaultProps = {
    by: 1
}

CounterBtn.propTypes = {
    by: PropTypes.number
}
export default Counter;