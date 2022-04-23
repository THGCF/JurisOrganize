import React, { Component } from 'react';
import Sidebar from './componets/bars/sidebar';

import './assets/styles/app.css'


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
    
      <Sidebar />
      
      </div>
    );
  }
}
 
export default App;


