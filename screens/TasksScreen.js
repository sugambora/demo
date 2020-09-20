import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import Pie from 'react-native-pie';

import Colors from '../constants/Colors';
import Api from '../constants/Api';
import Card from '../components/Card';

const TasksScreen = (props) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred', error, [
        {
          text: 'Ok',
        },
      ]);
    }
  }, [error]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', fetchData);

    return () => {
      unsubscribe();
    };
  }, [props.navigation]);

  const getDate = (date) => {
    let time = moment(date).format('hh:mma');
    let newDate = moment(date).format('MMM D');

    return <Text style={styles.date}>{time + ' - ' + newDate} </Text>;
  };

  const fetchData = async () => {
    let response;
    let resData;

    setError(null);
    setIsLoading(true);

    console.log('Inside fetchData.');

    try {
      response = await fetch(
        `https://my-json-server.typicode.com/vijaysharma0207/demo/posts`,
        {
          method: 'GET',
        },
      );
      resData = await response.json();
      // console.log('resData (TasksScreen): ', resData);
      let tasks = (
        <FlatList
          data={resData.data.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => (
            <Card
              backgroundColor={
                parseInt(itemData.item.hoursAssigned) -
                  parseInt(itemData.item.hoursCompletedTillNow) >
                0
                  ? Colors.lightBlue
                  : Colors.lightRed
              }>
              {/* <Text>{itemData.item.description}</Text> */}
              {/* {console.log(itemData.item)} */}
              <View style={styles.left}>
                <View>
                  <Text style={styles.heading}>{itemData.item.title}</Text>
                </View>
                <View style={{marginVertical: 8}}>
                  {getDate(itemData.item.created_at)}
                </View>

                {parseInt(itemData.item.hoursAssigned) -
                  parseInt(itemData.item.hoursCompletedTillNow) <
                  0 && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{marginRight: 5}}>
                      <Icon name="ellipse" size={12} color={Colors.darkRed} />
                    </View>
                    <Text style={styles.warning}>TASK DELAYED</Text>
                  </View>
                )}
              </View>

              <View style={styles.right}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginRight: 10,
                    marginVertical: 5,
                  }}>
                  {/* <Icon name="pie-chart" size={35} color={Colors.darkRed} /> */}

                  {parseInt(itemData.item.hoursAssigned) -
                    parseInt(itemData.item.hoursCompletedTillNow) <
                  0 ? (
                    // NO TIME REMAINING
                    <Pie
                      radius={18}
                      sections={[
                        {
                          percentage: 98,
                          color: Colors.darkRed,
                        },
                        {
                          percentage: 2,
                          color: Colors.lightRed,
                        },
                      ]}
                    />
                  ) : (
                    <Pie
                      radius={18}
                      sections={[
                        {
                          percentage:
                            (itemData.item.hoursCompletedTillNow /
                              itemData.item.hoursAssigned) *
                            100,
                          color: Colors.green,
                        },
                        {
                          percentage:
                            ((itemData.item.hoursAssigned -
                              itemData.item.hoursCompletedTillNow) /
                              itemData.item.hoursAssigned) *
                            100,
                          color: 'white',
                        },
                      ]}
                    />
                  )}
                </View>

                <Text style={styles.mark}>MARK COMPLETE</Text>
              </View>
            </Card>
          )}
        />
      );

      setTasks(tasks);
      setIsLoading(false);
    } catch (err) {
      console.log('err.message: ', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      {tasks}
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    width: '70%',
    // height: 50,
    // backgroundColor: 'green',
  },
  right: {
    width: '30%',
    // height: 50,
    // backgroundColor: 'pink',
  },
  heading: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
  warning: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 11,
    color: Colors.darkRed,
  },
  mark: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 11,
    color: Colors.blue,
  },
  date: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
});

export default TasksScreen;
