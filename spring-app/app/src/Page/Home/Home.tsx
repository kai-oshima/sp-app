import * as React from 'react';
import { withRouter } from 'react-router';

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