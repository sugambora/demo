import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';

import TasksScreen from '../screens/TasksScreen';
import AssignedScreen from '../screens/AssignedScreen';
import CompletedScreen from '../screens/CompletedScreen';

const defaultNavOptions = (props) => {
  return {
    headerStyle: {
      backgroundColor: 'pink',
      height: 100,
    },
    headerRight: () => {},
  };
};

const Tasks = createStackNavigator();
const TasksNavigator = () => {
  return (
    <Tasks.Navigator
      initialRouteName="TasksScreen"
      headerMode="screen"
      screenOptions={defaultNavOptions}>
      <Tasks.Screen name="TasksScreen" component={TasksScreen} />
    </Tasks.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  // const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={defaultNavOptions}
      tabBarOptions={{
        activeTintColor: Colors.black,
        inactiveTintColor: Colors.tabGrey,
        // inactiveTintColor: 'pink',
        labelStyle: {fontSize: 14, fontFamily: 'OpenSans-Bold'},
      }}>
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarLabel: 'My Tasks',
        }}
      />
      <Tab.Screen
        name="Assigned"
        component={AssignedScreen}
        // options={{tabBarLabel: () => <Text>Assigned</Text>}}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        // options={{tabBarLabel: () => <Text>Completed</Text>}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabName: {fontFamily: 'OpenSans-Bold', fontSize: 16},
});
