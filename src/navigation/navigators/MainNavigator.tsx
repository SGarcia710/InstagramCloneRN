import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/Home';
import SearchScreen from '@app/screens/Search';
import ProfileScreen from '@app/screens/Profile';
import Header from '@app/components/Header';
import CreatePostScreen from '@app/screens/CreatePost';
import {Image, StyleSheet, View} from 'react-native';
import {scale} from '@app/utils';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          header: () => <Header />,
          tabBarIcon: ({focused}) => {
            switch (route.name) {
              case 'Home':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/HomeSelectedIcon.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/HomeIcon.png')}
                    />
                  );
                }
              case 'Search':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/SearchSelectedIcon.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/SearchIcon.png')}
                    />
                  );
                }
              case 'Create Post':
                return (
                  <Image
                    style={styles.icon}
                    source={require('@app/assets/icons/CreatePostIcon.png')}
                  />
                );
              case 'Market':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/NotificationsSelectedIcon.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/NotificationsIcon.png')}
                    />
                  );
                }
              case 'Profile':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/ProfileSelectedIcon.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('@app/assets/icons/ProfileIcon.png')}
                    />
                  );
                }
            }
          },
          tabBarShowLabel: false,
          tabBarBackground: () => <View style={styles.tabBarBackground} />,
          tabBarStyle: {
            borderTopColor: '#CCC',
            borderTopWidth: 0.5,
          },
        };
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create Post" component={CreatePostScreen} />
      <Tab.Screen name="Market" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: scale(22),
    height: scale(24),
    resizeMode: 'contain',
  },
  tabBarBackground: {
    backgroundColor: 'rgba(250,250,250,0.01)',
  },
});
