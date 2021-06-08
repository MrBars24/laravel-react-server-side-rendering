import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import AppRouter from '../routes';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

const Content = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    }, []);

    return (
        <Router>
            <>
                <Navbar />
                <AppRouter/>
            </>
        </Router>
    );
}
  
export default withRouter(Content);