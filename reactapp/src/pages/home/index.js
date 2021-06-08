import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { StateContext } from '../../context';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <h1>HOME</h1>
  )
}

export default withRouter(Home);