import {scale} from '@app/utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FirebaseAuth from '@react-native-firebase/auth';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootNavigatorParmsList>>();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Pressable
        style={{
          position: 'absolute',
          left: scale(12),
          bottom: scale(12),
        }}
        onPress={() => navigation.navigate('StoryCreator')}>
        <Image
          style={[styles.icon]}
          source={require('@app/assets/icons/CameraIcon.png')}
        />
      </Pressable>
      <Image
        style={styles.logo}
        source={require('@app/assets/images/InstagramLogo.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: scale(12),
          bottom: scale(10),
        }}>
        <Image
          style={[styles.icon, {marginRight: scale(18)}]}
          source={require('@app/assets/icons/IGTVIcon.png')}
        />

        <Pressable onPress={FirebaseAuth().signOut}>
          <Image
            style={styles.icon}
            source={require('@app/assets/icons/MessangerIcon.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scale(6),
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  icon: {
    width: scale(24),
    height: scale(22),
    resizeMode: 'contain',
  },
  logo: {
    width: scale(105),
    height: scale(28),
    resizeMode: 'contain',
  },
});
