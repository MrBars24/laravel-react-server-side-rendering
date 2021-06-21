import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "../components/nav";
import Home from "../Pages/home";
import About from "../Pages/about";

const Content = () => {
    var canUseDOM = !!(
        (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
      );

    useEffect(() => {
        console.log("content loaded")
    });

    return (
        canUseDOM ?
        <Router>
            <>
                <Nav/>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </>
        </Router> :
        <div>
            <>
                <Nav/>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </>
        </div>
    );
}

export default Content;