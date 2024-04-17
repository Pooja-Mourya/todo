// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar } from 'react-native';
import { Colors } from '../assets/Colors';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // After animation, navigate to TodoScreen
      navigation.navigate('LoginScreen');
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
        <StatusBar hidden/>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]} onPress={()=>navigation.navigate("LoginScreen")}>Todo App</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backGround,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primaryLight,
  },
});

export default SplashScreen;
