import React from 'react';

import {IconButton} from 'material-ui';
//import SvgIcons from 'material-ui/lib/svg-icons';
//import {AvMovie} from 'material-ui/lib/svg-icons';
import AvMovie from 'material-ui/lib/svg-icons/av/movie';
import Colors from 'material-ui/lib/styles/colors';

class Navbar extends React.Component {
  render() {
    return (
      <IconButton touch={true}>
        {/* <SvgIcons.AvMovie color={Colors.red300}/> */}
        <AvMovie color={Colors.red200}/>
      </IconButton>
    );
  }
}

export default Navbar;
