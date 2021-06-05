import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Header from '../Header/Header';

interface Props extends RouteComponentProps {
  children? : any;
}

const Home = () => {
  return (
    <div id="homePage">
      <section>
        <h1>良い感じの画像</h1>
      </section>
      <section>
        <h1>良い感じの画像</h1>
      </section>
    </div>
  );
}

export default withRouter(Home);