import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const CompletedScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: Colors.darkRed,
          fontFamily: 'OpenSans-Bold',
          fontSize: 16,
        }}>
        No Data
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CompletedScreen;
