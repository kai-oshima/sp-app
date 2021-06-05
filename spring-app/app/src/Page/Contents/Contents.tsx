import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import * as Common from '../../Common/Function/Function';
import Header from '../Header/Header';

interface Props extends RouteComponentProps {
  children? : any,
}

const Contents = (props : Props) => {
  return (
    <div id="contents">
      <Header isLoggedIn={Common.isLoggedIn()} />
      {props.children}
    </div>
  )
}

export default withRouter(Contents);