import React from 'react';
import ReactDOM from 'react-dom'
    import App from './App.jsx';
import AppStateEx from './AppState.jsx';
import AppRouter from './AppState.jsx';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, About, Contact } from './AppState.jsx';

ReactDOM.render(<AppStateEx />, document.getElementById('app'));

