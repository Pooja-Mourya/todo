import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ccc' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const iconName = route.name === 'Home' ? 'home' : route.name === 'Settings' ? 'settings' : 'person';

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Icon name={iconName} size={24} color={isFocused ? '#673ab7' : '#222'} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};


