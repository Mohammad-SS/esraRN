import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-elements';
import {LANGSCODE} from '../../enums/enum';

const LangSlide = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadein = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  fadein();
  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Text style={styles.inTheNameOfGod}>بسم الله الرحمن الرحیم</Text>

      <View style={styles.box}>
        <Text style={styles.chooseLang}>
          لطفا زبان مورد نظر خود را انتخاب کنید :
        </Text>
        <Text style={styles.chooseLang}>
          Please choose your default language :
        </Text>
        <Text style={styles.chooseLang}>يرجى اختيار الافتراضي الخاص بك</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderBottomColor: '#a8dadc',
            borderBottomWidth: 1,
          }}
        />
        <Button
          buttonStyle={{backgroundColor: '#e63946', margin: 10, height: 40}}
          titleStyle={{fontFamily: 'IRANSans', fontSize: 14}}
          title="فارسی"
          onPress={() => {
            languageSelected(LANGSCODE.PERSIAN, props.handler, fadeAnim);
          }}
        />
        <Button
          buttonStyle={{backgroundColor: '#457b9d', margin: 10, height: 40}}
          titleStyle={{fontFamily: 'Aller', fontSize: 16}}
          title="English"
          onPress={() => {
            languageSelected(LANGSCODE.ENGLISH, props.handler, fadeAnim);
          }}
        />
        <Button
          buttonStyle={{backgroundColor: '#1d3557', margin: 10, height: 40}}
          titleStyle={{fontFamily: 'Arial', fontSize: 16}}
          title="عربی"
          onPress={() => {
            languageSelected(LANGSCODE.ARABIC, props.handler, fadeAnim);
          }}
        />
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inTheNameOfGod: {
    fontFamily: 'IranNastaliq',
    fontWeight: '900',
    fontSize: 24,
    color: '#1d3557',
  },
  box: {
    height: 295,
    width: 310,
    marginTop: 40,
    borderColor: '#a8dadc',
    borderWidth: 2,
    borderRadius: 5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  chooseLang: {
    alignSelf: 'center',
    fontFamily: 'IRANSans',
    fontSize: 12,
    marginTop: 10,
  },
  langButtons: {
    margin: 5,
  },
});
const languageSelected = async (langCode, setCurrentSlide, fade) => {
  AsyncStorage.setItem('UserLanguage', langCode.toString());
  Animated.timing(fade, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start(() => {
    setCurrentSlide(prev => {
      const nextSlide = prev + 1;
      return nextSlide;
    });
  });
};
export default LangSlide;
