import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
