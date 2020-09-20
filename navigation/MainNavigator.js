import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from './TabNavigator';
const MainNavigator = (props) => {
  // console.log('MainNavigator');
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
