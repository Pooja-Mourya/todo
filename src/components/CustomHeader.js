import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../assets/Colors';

const CustomHeader = ({ title, onPressArrow, onPressMenu }) => {
    return (
        <View style={styles.header}>
          <StatusBar backgroundColor={Colors.secondary}/>
            <TouchableOpacity onPress={onPressArrow}>
                <Feather name="arrow-left-circle" color={Colors.primaryLight} size={24} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onPressMenu}>
                {/* <Feather name="user" color={Colors.primaryLight} size={24} /> */}
                <Image source={require('../assets/team.png')} style={{width:30, height:30}}
/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80, // Set height to 56 units
        backgroundColor: Colors.secondary,
        justifyContent: 'space-between',
        alignItems: 'center', // Center content vertically
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingTop:20
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CustomHeader;
