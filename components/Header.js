import * as React from 'react';
import { Appbar } from 'react-native-paper';

// Heading of Fedd page

const Header = () => {

  return (
    <Appbar.Header style={{backgroundColor:'#acaeb0'}}>
      <Appbar.Content title="Rock Paper Scissor" style={{ alignItems: 'center', transform:[{scaleX: 1.5}, {scaleY: 1.5}]}}/>
    </Appbar.Header>
  );
};

export default Header;