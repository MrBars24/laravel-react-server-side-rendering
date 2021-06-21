import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Content from './components/content';

if (document.getElementById('content')) {
    ReactDOM.render(
        <BrowserRouter>
            <HelmetProvider>
                <Content />
            </HelmetProvider>
        </BrowserRouter>,
        document.getElementById('content')
    );
}