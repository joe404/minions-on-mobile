import React from 'react';
import {Link} from 'react-router';

import {Toolbar, ToolbarGroup, FlatButton, RaisedButton} from 'material-ui';

class Footer extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <FlatButton label="Dashoboard" linkButton={true} containerElement={<Link to="/"/>}/>
          <FlatButton label="Profile" linkButton={true} containerElement={<Link to="/profile"/>}/>
          <RaisedButton label="Join us" linkButton={true} containerElement={<Link to="/help"/>} primary={true}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Footer;
