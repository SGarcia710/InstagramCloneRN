import {scale} from '@app/utils';
import * as React from 'react';
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Image
        style={[
          styles.icon,
          {
            position: 'absolute',
            left: scale(12),
            bottom: scale(12),
          },
        ]}
        source={require('@app/assets/icons/CameraIcon.png')}
      />
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
        <Image
          style={styles.icon}
          source={require('@app/assets/icons/MessangerIcon.png')}
        />
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
