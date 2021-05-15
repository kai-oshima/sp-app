import React from 'react';
import Layout from './Page/Layout/Layout';
import './App.css';
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Page/Home/Home';
import Main from './Page/Main/Main';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import * as Common from './Common/Function/Function';
import * as Auth from './Common/Authenticate/Authenticate';

export const App = () => {
  const history = createBrowserHistory();
  const[auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    setAuth(Auth.checkAuth);
  }, []);

  return(
    <div className="App">
      <Router history={history}>
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
      </Router>
    </div>
  );
}

export default App;
