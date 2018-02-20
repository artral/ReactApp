import React from 'react';
import propTypes from 'prop-types'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                data: [
                    { "id": 1, "name": "Foo", "age": "55" },
                    { "id": 2, "name": "bar", "age": "22" },
                    { "id": 3, "name": "tango", "age": "22" },
                    { "id": 4, "name": "Jelly", "age": "12" },
                    { "id": 5, "name": "Belly", "age": "121" }
                ],
                header: "Header props from state",
                content: "content from state"

            }
    }
    render() {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>

                <h2>Content</h2>
                <p data-artral="Name"> {1 + 1} This is test content</p>
                <p data-artral="Name"> {this.state.header}</p>
                <p data-artral="Name"> {this.state.content}</p>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => < TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>);
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.headerProps} </h1>
            </div>
        )
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h1> Header </h1>
                <p> The Content Text!!! </p>
            </div>
        )
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.data.id} </td>
                <td> {this.props.data.name} </td>
                <td> {this.props.data.age} </td>
                <td> {this.props.data.name} </td>
            </tr>
        )
    }
}
App.propTypes =
    {
        propArray: propTypes.array.isRequired,
        propBool: propTypes.bool.isRequired,
        propFunc: propTypes.func,
        propNumber: propTypes.number,
        propString: propTypes.string,
        propObject: propTypes.object
    }
App.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: "String value...",
    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
}

export default App;