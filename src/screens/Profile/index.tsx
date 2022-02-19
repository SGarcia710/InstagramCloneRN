import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
