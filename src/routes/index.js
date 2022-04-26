import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../componets/pages/home';
import Folders from '../componets/pages/folders';
import Calendar from '../componets/pages/calendar';
import Messagens from '../componets/pages/messagens';

class SideBarRoutes extends Component {
 
    render() { 
        return (
        
            
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/folders" element={<Folders/>} />
                    <Route path="/calendar" element={<Calendar/>} />
                    <Route path="/menssagens" element={<Messagens/>} />
                </Routes>
            
        
        );
    }
}
 
export default SideBarRoutes;