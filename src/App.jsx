import React, { Component } from 'react';
import Sidebar from './componets/bars/sidebar';

import './assets/styles/app.css'
import './assets/styles/sidebar.css'


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
    
      <div className='sidebar'>
        <Sidebar />
      </div>
      
      </div>
    );
  }
}
 
export default App;


