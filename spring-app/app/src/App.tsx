import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Page/Home/Home';
import Main from './Page/Main/Main';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import * as Common from './Common/Function/Function';
import Contents from './Page/Contents/Contents';
import Logout from './Page/Logout/Logout';

export const App = () => {
  return(
    <div className="App">
        <BrowserRouter>
          <Contents>
            <Switch>
              <Route exact path="/" component={Home} />
              <UnAuthRoute exact path="/login" component={Login} />
              <UnAuthRoute exact path="/signup" component={SignUp} />
              <AuthRoute exact path="/main" component={Main} />
              <LogoutRoute exact path="/logout" component={Logout} />
            </Switch>
          </Contents>
        </BrowserRouter>
    </div>
  );
}

//認証後に遷移可能なページ
const AuthRoute = (props : any) => {
  return Common.isLoggedIn() ? <Route {...props} /> : <Redirect to={'/'} />
}

//認証前のみ遷移可能なページ
const UnAuthRoute = (props: any) => {
  return Common.isLoggedIn() ? <Redirect to={'/'} /> : <Route {...props} />
}

//ログアウト
const LogoutRoute = (props: any) => {
  if(Common.isLoggedIn()){
    Common.setCookie("login-status", "0");
  }
  return <Redirect to={'/'} />
}

export default App;
