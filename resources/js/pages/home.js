import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    useEffect(() => {
        console.log("home loaded")
    });

    return (
        <div>
            <Helmet>
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SSR - HOME</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>HOME</h1>
        </div>
    );
}

export default Home;