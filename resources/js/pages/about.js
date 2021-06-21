import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    var canUseDOM = !!(
        (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
      );

    useEffect(() => {
        console.log("about loaded")
    });

    return (
        <div>
            <Helmet>
                <title>SSR - ABOUT</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>ABOUT</h1>
        </div>
    );
}

export default About;