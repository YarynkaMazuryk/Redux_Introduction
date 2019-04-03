import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment,
        decrement,
        addValue,
        subtractValue,
        storeResult,
        deleteResult} from '../../store/actions/index'

class Counter extends Component {

    render () {

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addValue}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractValue}  />
                <hr/>
                <button onClick={ () => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storeResults.map(strResult => {
                        return  <li key = {strResult.id} onClick={() => this.props.deleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        addValue: () => dispatch(addValue()),
        subtractValue: () => dispatch(subtractValue(5)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        deleteResult: (id) => dispatch(deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);