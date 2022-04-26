import React, { Component } from 'react';
import  {sideBarItens} from './sidebardata';
import SideBarRoutes from '../../routes';
import { Link } from 'react-router-dom';

import '../../assets/styles/sidebar.css'

class SideBar extends Component {
     
    render() { 
        return (
            <>      
                {
                sideBarItens.map(sideBarItem => (
                    <Link to={sideBarItem.link}>
                        <div className='sidebar_item'>
                            <span className='sidebar_icon'>{sideBarItem.icon}</span>
                            <span className='sidebar_tittle'>{sideBarItem.tittle}</span>
                        </div>
                    </Link>
            
                ) 
            ) 
        }
        </>
        );   
        };
    }
   
         

 
export default SideBar;

