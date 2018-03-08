import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx';
import AppStateEx from './AppState.jsx';
import { Home, About, Contact } from './AppState.jsx';

ReactDOM.render(<AppStateEx />, document.getElementById('app'));
ReactDOM.render(<AppStateEx />, document.getElementById('app1'));
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={AppAppRouter}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'))