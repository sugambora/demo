/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import MainNavigator from './navigation/MainNavigator';
import Colors from './constants/Colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <View style={styles.header}>
            <Image
              source={{
                uri:
                  'https://www.iconfinder.com/data/icons/greenline/512/star-512.png',
              }}
              style={{height: 28, width: 28}}
            />
            <View style={{paddingHorizontal: 5, paddingRight: 10}}>
              <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 20}}>
                1,128
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: Colors.lightBlue,
                borderColor: Colors.lightBlue,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{color: Colors.blue}}>How it works?</Text>
            </View>
          </View>

          <View style={styles.header}>
            <View style={{paddingHorizontal: 10}}>
              <MaterialIcon
                name="bell-outline"
                size={25}
                color={Colors.darkGrey}
              />
            </View>
            <Icon
              name="person-circle-outline"
              size={25}
              color={Colors.darkGrey}
            />
          </View>
        </View>
        <MainNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 2,
    paddingTop: 5,
    height: 70,
  },
  left: {flexDirection: 'column'},
  right: {flexDirection: 'column'},
});

export default App;
