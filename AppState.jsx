import React from 'react';
import propTypes from 'prop-types'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "setState...1"
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({ data: myArray  });
    };
    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h2> {this.state.data} </h2>
            </div>
        );
    }
}
export default App;