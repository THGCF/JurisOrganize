import React, { Component } from 'react';
import  {sideBarItens} from './sidebardata';
import Routes from '../../routes';
import { Link } from 'react-router-dom';

import '../../assets/styles/sidebar.css'

class SideBar extends Component {
     
    render() { 
        return (
            <div className='sidebar_itens'>
                {sideBarItens.map(sideBarItem => (
                    <Link to={sideBarItem.link}>
                        <div className='sidebar_item'>
                               
                    <span className='sidebar_icon'> {sideBarItem.icon} </span>
                    <span className='sidebar_tittle'> {sideBarItem.tittle} </span>
                              
                        </div>
                    </Link>
            ))}
            </div>          
        );
    }
}
 
export default SideBar;