import React from 'react';

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
                    { "id": 5, "name": "Dooms", "age": "121" }
                ],
                header: "Header props from state",
                content: "content from state"

            }
    }
    render() {
        return (
            <div>
                <Header headerProps={this.state.header} ></Header>
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

export default App;