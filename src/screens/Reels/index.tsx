import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ReelsScreenProps {}

const ReelsScreen = (props: ReelsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ReelsScreen</Text>
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
