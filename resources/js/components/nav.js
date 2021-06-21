import { divide } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    //npm install exenv --save
    var canUseDOM = !!(
        (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
      );

    useEffect(() => {
        console.log("nav loaded")
    });

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Nav;