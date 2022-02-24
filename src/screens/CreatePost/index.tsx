import {ScreenProps} from '@app/@types/navigation';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CreatePostScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Create Post'> {}

const CreatePostScreen = (props: CreatePostScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CreatePostScreen</Text>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
