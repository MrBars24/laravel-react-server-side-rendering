import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const html = ReactDOMServer.renderToString(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

dispatch(html);