import React from 'react';
import propTypes from 'prop-types'


class App extends React.Component {
    constructor() {
        super();
        this.state =
            {
                data: [],
            }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "set state";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({ data: myArray });
    };
    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>Set State </button>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>state Array : {this.state.data} </h4>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}
export default App;