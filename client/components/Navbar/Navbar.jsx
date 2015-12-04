import React from 'react';

import {IconButton} from 'material-ui';
import SvgIcons from 'material-ui/lib/svg-icons';
import Colors from 'material-ui/lib/styles/colors';

class Navbar extends React.Component {
  render() {
    return (
      <IconButton touch={true}>
        <SvgIcons.AvMovie color={Colors.red300}/>
      </IconButton>
    );
  }
}

export default Navbar;
