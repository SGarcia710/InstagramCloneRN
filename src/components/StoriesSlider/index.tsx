import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const STORIES = [
  {
    username: 'afcanop',
    avatarUrl:
      'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
  },
  {
    username: 'wdosopinal',
    avatarUrl:
      'https://images.unsplash.com/photo-1645484468855-1b4faa3e0873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
  },
  {
    username: 'kieron_d',
    avatarUrl:
      'https://images.unsplash.com/photo-1645504812848-29c2ebd5cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    username: 'craig',
    avatarUrl:
      'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
  },
  {
    username: 'jonaRock',
    avatarUrl:
      'https://images.unsplash.com/photo-1645458350916-332f2c28f79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    username: 'aldavid',
    avatarUrl:
      'https://images.unsplash.com/photo-1645523500097-d2283dc21bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    username: 'kingsbit',
    avatarUrl:
      'https://images.unsplash.com/photo-1645490534993-b576a134eb67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    username: 'asrolan98',
    avatarUrl:
      'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    username: 'jackomar99',
    avatarUrl:
      'https://images.unsplash.com/photo-1645490367741-7683019debc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];

const GRADIENT_COLORS = ['#FBAA47', '#D91A46', '#A60F93'];

interface StoriesSliderProps {}

const Story = ({
  username,
  avatarUrl,
}: {
  username: string;
  avatarUrl: string;
}) => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
      <LinearGradient colors={GRADIENT_COLORS} style={styles.gradientContainer}>
        <Image style={styles.image} source={{uri: avatarUrl}} />
      </LinearGradient>

      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const StoriesSlider = (props: StoriesSliderProps) => {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      horizontal>
      <Story
        username="Your Story"
        avatarUrl="https://sebastiangarcia.dev/images/avatar.jpg"
      />
      {STORIES.map((e, i) => {
        return <Story key={`STORY_${i}`} {...e} />;
      })}
    </ScrollView>
  );
};

export default StoriesSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: 9,
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 0.5,
    paddingBottom: 8,
  },
  gradientContainer: {
    width: 61,
    height: 61,
    borderRadius: 61 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {
    fontSize: 12,
    color: '#262626',
  },
});
