import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import CustomInput from '../components/CustomInput';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import {Colors} from '../assets/Colors';

const CreateUser = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passwrd, setPasswrd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      if (!email || !passwrd) {
        // Ensure email and password are provided
        ToastAndroid.show('Please provide an email and password.', ToastAndroid.SHORT);
        setLoading(false);
        return;
      }
  
      // Try to create a user with the given email and password
      await auth().createUserWithEmailAndPassword(email, passwrd);
      setLoading(false);
      ToastAndroid.show('User account created!', ToastAndroid.SHORT);
      navigation.navigate('LoginScreen');
    } catch (error) {
      // Handle errors during registration
      setLoading(false);
      
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
      } else if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('The email address is invalid!', ToastAndroid.SHORT);
      } else if (error.code === 'auth/weak-password') {
        ToastAndroid.show('The password is too weak!', ToastAndroid.SHORT);
      } else {
        // General error handling
        ToastAndroid.show('An error occurred during registration.', ToastAndroid.SHORT);
        console.error('Registration error:', error);
      }
    }
  };
  

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>User Registration</Text>
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={u => setEmail(u)}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          value={passwrd}
          onChangeText={p => setPasswrd(p)}
        />

        <TouchableOpacity style={styles.registerButton}>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('LoginScreen')}>
            if you have user account login
          </Text>
        </TouchableOpacity>
        <CustomButton
          title={
            loading ? (
              <ActivityIndicator color={Colors.secondary} />
            ) : (
              'Register'
            )
          }
          onPress={handleSignup}
        />
      </ScrollView>
    </View>
  );
};

export default CreateUser;

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
