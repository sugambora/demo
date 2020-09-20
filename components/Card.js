import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

const Card = (props) => {
  return (
    // <View style={{ ...styles.card, ...props.style }}  // passed styles will be merged
    <View
      style={{
        ...styles.card,
        ...{backgroundColor: props.backgroundColor},
      }}
      //   style={styles.card}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '98%',
    marginVertical: 5,
    // backgroundColor: 'green',
  },
});

export default Card;
