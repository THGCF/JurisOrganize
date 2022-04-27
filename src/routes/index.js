import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../componets/pages/Home';
import Folders from '../componets/pages/Folders';
import Calendar from '../componets/pages/Calendar';
import Messagens from '../componets/pages/Messagens';
import Login from '../componets/pages/Login';

class SideBarRoutes extends Component {
 
    render() { 
        return (
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/folders" element={<Folders/>} />
                    <Route path="/calendar" element={<Calendar/>} />
                    <Route path="/menssagens" element={<Messagens/>} />
                    <Route path="/" element={<Login/>} />
                </Routes>      
        );
    }
}
 
export default SideBarRoutes;