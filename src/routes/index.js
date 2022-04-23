import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../componets/pages/home';
import Folders from '../componets/pages/folders';
import Calendar from '../componets/pages/calendar';
import Messagens from '../componets/pages/messagens';

class Routes extends Component {
 
    render() { 
        return (
        <>
            <Router>

                    <Route path="/home" Component={Home} />
                    <Route path="/folders" Component={Folders} />
                    <Route path="/calendar" Component={Calendar} />
                    <Route path="/menssagens" Component={Messagens} />
           
            </Router>
        </>
        );
    }
}
 
export default Routes;