import {ScreenProps} from '@app/@types/navigation';
import Post from '@app/components/Post';
import StoriesSlider from '@app/components/StoriesSlider';
import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface HomeScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Home'> {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StoriesSlider />
        <Post />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
});
