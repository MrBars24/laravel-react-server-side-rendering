import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Content from './components/content';
import { StaticRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

let { url } = context;
const helmetContext = {};

const html = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
        <HelmetProvider context={helmetContext}>
            <Content />
        </HelmetProvider>
    </StaticRouter>
);

const { helmet } = helmetContext;
dispatch({
    html: html,
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
});