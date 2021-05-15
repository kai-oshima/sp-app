import * as React from 'react';
import { Redirect, withRouter } from 'react-router';
import * as Common from "../../Common/Function/Function";

const Main = () => {
  React.useEffect(() => {
    if(Common.getCookie('login-status') == '0'){
      <Redirect to='/login' />
    }
  }, [])

  return(
    <div id="main">
      <h1>個人ページ</h1>
    </div>
  );
}

export default withRouter(Main);