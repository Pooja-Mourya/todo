import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Animated,
  Alert,
  ToastAndroid,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {Colors} from '../assets/Colors';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleCheckbox = () => {
    setIsEnabled(!isEnabled);
  };
  const handleLogin = () => {
    setLoading(true);
    try {
      if (username && password) {
        auth()
          .signInWithEmailAndPassword(username, password)
          .then(() => {
            setLoading(false);
            navigation.navigate('HomeStack');
            ToastAndroid.show(
              'User signed in successfully',
              ToastAndroid.SHORT,
            );
          })
          .catch(error => {
            setLoading(false);
            if (error.code === 'auth/network-request-failed') {
              // Handle network error specifically
              ToastAndroid.show(
                'Network error occurred, please try again.',
                ToastAndroid.SHORT,
              );
              navigation.navigate('HomeStack');
            } else if (error.code === 'auth/operation-not-allowed') {
              ToastAndroid.show('Anonymous error', ToastAndroid.SHORT);
            } else {
              ToastAndroid.show(
                `Authentication error: ${error.message}`,
                ToastAndroid.SHORT,
              );
            }
            console.error(error);
          });
      } else {
        setLoading(false);
        ToastAndroid.show(
          'Please enter username and password',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      setLoading(false);
      ToastAndroid.show('An unexpected error occurred.', ToastAndroid.SHORT);
      navigation.navigate('HomeStack');

      console.error(error);
    }
  };

  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     // After animation, navigate to TodoScreen
  //     navigation.navigate('HomeStack');
  //   });
  // }, [fadeAnim, navigation]);

  const navigateToAuthUserStack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'HomeStack'}],
      }),
    );
  };

  useEffect(()=>{
    navigateToAuthUserStack()
  },[])

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Login</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          onChangeText={u => setUsername(u)}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={p => setPassword(p)}
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Fontisto
            name={isEnabled ? 'check' : 'checkbox-passive'}
            size={20}
            color={isEnabled ? Colors.primary : Colors.secondary}
          />
          <Text style={{marginLeft: 10, fontSize: 15}}>
            {isEnabled ? 'Logged in ' : 'Remember me'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Register')}>
            create user account
          </Text>
        </TouchableOpacity>
        <CustomButton
          title={
            loading ? <ActivityIndicator color={Colors.secondary} /> : 'Login'
          }
          onPress={handleLogin}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backGround,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  registerButton: {
    alignSelf: 'center',
    marginVertical: 25,
  },
  registerText: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default LoginScreen;

// project-335182865622
