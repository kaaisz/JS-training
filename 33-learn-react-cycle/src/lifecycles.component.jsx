import React from 'react';

class Lifecycles extends React.Component {
    constructor() {
        // 0. given all functionality by putting super
        super();
        console.log('constructor');
    }

    // 2. mount - needs to call before to fetch the data
    componentDidMount() {
        console.log('componentDidMount');
    }
    // 3. update - happen after finished mounting
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    // 5. unmount - stop mounting and not update
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    // 4. needs to define as shouldComponentUpdate to be update for the next lifecycle, after DidUpdate triggered
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps);
        return nextProps.text !== this.props.text;
    }

    // 1. render - display desired components
    render() {
        console.log('render');
        return(
            <div className="lifecycles">
                <h3>Lifecycle Component</h3>
                {this.props.text}
            </div>
        );
    }
}

export default Lifecycles;