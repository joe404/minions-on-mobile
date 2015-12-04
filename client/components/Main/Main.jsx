import React from 'react';

import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.children || <Dashboard/>}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
