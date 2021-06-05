import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import * as Common from "../../Common/Function/Function";

interface Props extends RouteComponentProps {
  children ? : any;
}

const Main = (props : Props) => {

  React.useEffect(() => {
    
  }, [])

  return(
    <div id="main">
      <div className="page-title">
        <input type="text" placeholder="ページタイトル"/>
      </div>
      <div className="block">
        <div className="block-title">
          <div className="title-row">

          </div>
          <div className="title-add-row">

          </div>
        </div>
        <div className="block-data">
          <div className="data-row">

          </div>
          <div className="data-add-row">

          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Main);