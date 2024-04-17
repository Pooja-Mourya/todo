import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const MicrosoftSignIn = () => {

  const onMicrosoftButtonPress = async () => {
    try {
      // Generate the provider object
      const provider = new auth.OAuthProvider('microsoft.com');
      // Optionally add scopes
      provider.addScope('offline_access');
      // Optionally add custom parameters
      provider.setCustomParameters({
        prompt: 'consent',
        // Optional "tenant" parameter for optional use of Azure AD tenant.
        // e.g., specific ID - 9aaa9999-9999-999a-a9aa-9999aa9aa99a or domain - example.com
        // defaults to "common" for tenant-independent tokens.
        tenant: 'tenant_name_or_id',
      });

      // Sign-in the user with the provider
      await auth().signInWithRedirect(provider);
    } catch (error) {
      console.error('Microsoft sign in error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onMicrosoftButtonPress} style={{ backgroundColor: '#0078D4', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Sign in with Microsoft</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MicrosoftSignIn;
