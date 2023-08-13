import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Adminpage from '../components/Adminpage'

const PrivateRoute = ({ component: Adminpage, isAuthenticated, ...rest }) => (
   
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Adminpage best_array={props.best_array} cart_array={props.cart_array} setarray={props.setarray} /> :(<div></div>)
    }
  />
);

export default PrivateRoute;