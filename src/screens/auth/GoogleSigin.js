import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  // Add your configuration here
});

const GoogleSignin = () => {

  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onGoogleButtonPress} style={{ backgroundColor: '#4285F4', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleSignin;
