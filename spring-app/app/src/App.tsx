import React from 'react';
import Layout from './Page/Layout/Layout';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Page/Home/Home';
import Main from './Page/Main/Main';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import * as Common from './Common/Function/Function';

export const App = () => {
  const[auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    Common.setCookie("login-status", String(auth));
  }, []);

  return(
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
            <Redirect from='/main' to='/' />
            {auth ?
              <Route exact path="/main" component={Main}/>
              :
              ''
            }
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
