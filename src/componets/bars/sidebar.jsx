import React, { Component } from 'react';
import SideBarData from './sidebardata';

import '../../assets/styles/sidebar.css'


class Sidebar extends Component {

    render() { 
        return (
        <div className='sidebar'>
           <SideBarData />
        </div>
        );
    }
}
 
export default Sidebar;
