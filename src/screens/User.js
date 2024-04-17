// import React, {useState, useEffect} from 'react';
// import {View, Text, Alert, StyleSheet} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import CustomButton from '../components/CustomButton';
// import CustomHeader from '../components/CustomHeader';
// import {Colors} from '../assets/Colors';
// import {create} from 'react-test-renderer';

// function User({navigation}) {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   function handleLogout() {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to log out?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             // Perform logout
//             if (user) {
//               auth()
//                 .signOut()
//                 .then(() => {
//                   navigation.navigate('LoginScreen');
//                   console.log('User signed out!');
//                 });
//             } else {
//               navigation.navigate('LoginScreen');
//             }
//           },
//         },
//       ],
//       {cancelable: false},
//     );
//   }
//   // useEffect(() => {
//   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   //   return subscriber; // unsubscribe on unmount
//   // }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <>
//         <View style={styles.container}>
//         <CustomHeader title="User Detail" onPressArrow={navigation.goBack()} />

//           <Text style={styles.textS}>anonymous.user@gmail.com</Text>
//           {/* <Text>Login</Text> */}
//           <CustomButton title={'Logout'} onPress={handleLogout} />
//         </View>
//       </>
//     );
//   }

//   return (
//     <View>
//       <CustomHeader title="User Detail" onPressArrow={navigation.goBack()} />
//       <View style={styles.container}>
//         <Text style={styles.textS}>Welcome {user.email}</Text>
//       <CustomButton title={'Logout'} onPress={handleLogout} />
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: Colors.backGround,
//     paddingHorizontal: 20,
//   },
//   textS:{
//     fontSize:20,
//     color:Colors.primary,

//   }
// });

// export default User;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../assets/Colors';

function User({navigation}) {
  // Remove initializing state and user state since we're not dealing with Firebase auth state
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  function handleLogout() {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Perform logout
            // Since we're not using Firebase, just navigate to the LoginScreen
            navigation.navigate('LoginScreen');
          },
        },
      ],
      {cancelable: false},
    );
  }

  // Since we removed Firebase authentication, let's simplify the component's UI:
  return (
    <>
      <CustomHeader
        title="User Detail"
        onPressArrow={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <Image source={require('../assets/team.png')} style={styles.img} />
        <Text style={styles.textS}>Welcome to the User Screen</Text>
        <CustomButton title={'Logout'} onPress={handleLogout} />
        <TouchableOpacity style={styles.registerButton}>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Register')}>
            create user account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('LoginScreen')}>
            if you have user account login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backGround,
    paddingHorizontal: 20,
    alignContent: 'center',
  },
  textS: {
    fontSize: 20,
    color: Colors.primary,
  },
  img: {width: 100, height: 100},
  registerText: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  registerButton: {
    alignSelf: 'center',
    marginVertical: 25,
  },
});

export default User;
