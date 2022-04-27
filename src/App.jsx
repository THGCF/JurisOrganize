import React, { Component } from 'react';
import Sidebar from './componets/bars/sidebar';

import './assets/styles/app.css';
import './assets/styles/sidebar.css';

import SideBarRoutes from './routes';

import {BrowserRouter} from 'react-router-dom'
import Login from './componets/pages/Login';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter>
        <div className='App'>
    
          <div className='sidebar'>
            <Sidebar />
              <SideBarRoutes/>
          </div>
        <div className='Pages'>
            <Login/>
        </div>
        </div>
      </BrowserRouter>
      
    );
  }
}
 
export default App;


