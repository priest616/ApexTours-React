import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound';
import Index from './pages/Index';

function App() {


    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='' element={<Index />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;
