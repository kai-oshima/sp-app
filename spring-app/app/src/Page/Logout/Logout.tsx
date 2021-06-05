import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import * as Common from '../../Common/Function/Function';

interface Props extends RouteComponentProps {
  children? : any;
}

const Logout = (props: Props) => {
  return (
    <div></div>
  )
}

export default withRouter(Logout);