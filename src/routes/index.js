import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/* Componentes*/

import Calendar from '../componets/pages/calendar';
import Folders from '../componets/pages/folders';
import Home from '../componets/pages/home';
import Mensagens from '../componets/pages/messagens'

class Routes extends Component {
    state = {  } 
    render() { 
        return (

            <Router>
                <Route path='/calendar' component={Calendar} />
                <Route path='/home' component={Home} />
                <Route path='/folders' component={Folders} />
                <Route path='/mensagens' component={Mensagens} />
            </Router>
        );
    }
}
 
export default Routes;