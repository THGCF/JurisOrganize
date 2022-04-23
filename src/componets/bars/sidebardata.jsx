import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Routes from '../../routes/index';
import * as BoxIcons from 'react-icons/bi'

/* Componentes*/

/* import Calendar from '../pages/calendar';
import Folders from '../pages/folders';
import Home from '../pages/home';
import Mensagens from '../pages/messagens' */

class SideBarData extends Component {
    
    handleClickOnItem(){
        console.log("FUI CLICADO");
    }

    
    
    render() { 

       /*  <Router>
            <Route path='/calendar' component={Calendar} />
            <Route path='/home' component={Home} />
            <Route path='/folders' component={Folders} />
            <Route path='/mensagens' component={Mensagens} />
        </Router> */

        const sideBarItens = [
            {
                tittle: "",
                icon: <BoxIcons.BiMenu/>,
                link: "",
            },

            {
                tittle: "Página Inicial",
                icon: <BoxIcons.BiHome/>,
                link: "/home"
            },
            {
                tittle: "Pastas",
                icon: <BoxIcons.BiFolderOpen/>,
                link: "/folders"
            },
            {
                tittle: "Calendário",
                icon: <BoxIcons.BiCalendarAlt/>,
                link: "/calendar"
            },
            {
                tittle: "Mensagens",
                icon: <BoxIcons.BiMessageMinus/>,
                link: "/mensagens"
            },
            {
                tittle: "Usuário",
                icon: <BoxIcons.BiUser/>,
                link: "/user"
            },
            {
                tittle: "Sair",
                icon:  <BoxIcons.BiLogOut/>,
                link:  <Routes>"/loguin"</Routes>
            },
        ]

        

        return (
            <div className='sidebar_itens'>
                {sideBarItens.map(sideBarItem => (
                    <Link to={sideBarItem.link}>  
                    <div className='sidebar_item'  onClick={this.handleClickOnItem} >
                
                        
                        <span className='sidebar_icon'> {sideBarItem.icon} </span>
                        <span className='sidebar_tittle'> {sideBarItem.tittle} </span>
                        
              
                    </div>
                    
                    </Link>

                

                ))}
                
                
            </div>
       );
       
    }
}
 
export default SideBarData
