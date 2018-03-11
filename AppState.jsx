import React from 'react';
import propTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Appstate1 extends React.Component {
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
        this.setState({ data: myArray });
    };
    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data.join('</br>')}</h4>
            </div>
        );
    }
}
class Appstate2 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 'Hello'
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "qweqeqeqw..."
        var d2 = this.state.data;
        var da = [];
        da.push('po');
        da.push(d2);
        this.setState({ data: da.join(',') })
    };
    render() {
        return (
            <div>
                <h4>State Array: {this.state.data}</h4>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}
class AppForceUpdate extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.forceUpdateHandler = this.ForceUpdateHandler.bind(this);
    };
    ForceUpdateHandler() {
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number by updating state: {Math.random() * 100}></h4>
            </div>
        );
    }
}


class AppStateChange extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.findDomNode = this.findDomNode.bind(this);
    };
    findDomNode() {
        var myDiv = document.getElementById('app');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
        var myDiv1 = document.getElementById('app1');
        ReactDOM.findDOMNode(myDiv1).style.color = 'green';
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <button onClick={this.findDomNode}>Find DOM Node</button>
                <h4>Random number by updating state: {Math.random() * 100}></h4>
            </div>
        );
    }
}

class AppFormData1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'AppFormData'
        }
        this.updateStateData = this.updateStateData.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.childButtonClickHandler = this.childButtonClickHandler.bind(this);
    };
    updateStateData(e) {

        this.setState({ data: e.target.value });
    };
    buttonClickHandler(e) {

        this.setState({
            data: 'buttonClickHandler'
        });
    };
    childButtonClickHandler(e) {

        this.setState({
            data: 'buttonClickHandler....childButtonClickHandler'
        });
    };
    render() {
        return (
            <div>
                <h2> Parent Value: {this.state.data} </h2>
                <button onClick={this.buttonClickHandler}> Button </button>
                <Content myDataProp={this.state.data} updateStateProp={this.updateStateData} clickEvent={this.childButtonClickHandler} />
            </div>

        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.myDataProp}
                    onChange={this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
                <button onClick={this.props.clickEvent}> ChildComponent</button>
                <h1>weeeeeeeeeeeeeee</h1>

            </div>
        )
    }
}

class ReferenceComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'gelo',
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({ data: 'updateState' });
    }
    clearInput(e) {
        this.setState({ data: 'cleared' });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateState} ref="myInput" />
                <h4>{this.state.data}</h4>
                <button onClick={this.clearInput}>CLEAR</button>
            </div>

        )
    }
}
class DynamicComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                data:
                [
                    { color: 'yellow', id: 5 }, { color: 'red', id: 2 }, { color: 'blue', id: 3 }, { color: 'orange', id: 4 },
                ]
            }


    }
    render() {
        return (
            <div>
                {this.state.data.map((dynamiccomponent, i) => <RowComponent key={i} componentData={dynamiccomponent} />)}
            </div>
        )
    }
}

class RowComponent extends React.Component {
    render() {
        return (
            <div>
                <div> {this.props.componentData.key} </div>
                <div> {this.props.componentData.color} </div>
                <div> {this.props.componentData.id} </div>
            </div>
        );
    }
}


class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Contact'}>Contact</Link></li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Contact' component={Contact} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default AppRouter;

class Home extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1> Home </h1>
                    </li>
                </ul>
            </div>
        )
    }
}

class About extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1> ABout </h1>
                    </li>
                </ul>
            </div>
        )
    }
}

class Contact extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1> Contact </h1>
                    </li>
                </ul>
            </div>
        )
    }
}
