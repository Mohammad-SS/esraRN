import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import LangSlide from '../components/LangSlide';
import AsyncStorage from '@react-native-community/async-storage';
export default function SliderScreen() {
  const [statusColor, setStatusColor] = useState();
  const [currentSlide, setCurrentSlide] = useState(getUserLanguage() ? 0 : 1);
  const [userLang, setUserLang] = useState();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#f1faee"
        barStyle="dark-content"
        animated={true}
      />
      <MySlider slide={currentSlide} handler={setCurrentSlide} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const getUserLanguage = async () => {
  try {
    const currenLang = await AsyncStorage.getItem('UserLanguage');
    return currenLang;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const MySlider = props => {
  switch (props.slide) {
    case 0:
      return <LangSlide handler={props.handler} />;
    case 1:
      return (
        <View>
          <Text>HELLO WORLD</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>No Slide To Show</Text>
        </View>
      );
  }
};
