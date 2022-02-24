import {scale} from '@app/utils';
import * as React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

interface PostProps {}

const POST: Post = {
  user: {
    username: 'joshua_l',
    avatarUrl:
      'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
    isVerified: true,
  },
  media: [
    {
      url: 'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
      type: 'image',
      size: {
        width: 375,
        height: 375,
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
      type: 'image',
      size: {
        width: 375,
        height: 375,
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
      type: 'image',
      size: {
        width: 375,
        height: 375,
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
      type: 'image',
      size: {
        width: 375,
        height: 375,
      },
    },
  ],
  description: 'The game in Japan was amazing and I want to share some photos',
  place: {
    name: 'Tokyo, Japan',
  },
};

const Post = (props: Post) => {
  const scrollX = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.avatar} source={{uri: POST.user.avatarUrl}} />
          <View style={{justifyContent: 'center'}}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{POST.user.username} </Text>
              {POST.user.isVerified && (
                <Image
                  style={styles.verifyIcon}
                  source={require('@app/assets/icons/OfficialAccountIcon.png')}
                />
              )}
            </View>
            <Text
              style={{
                fontSize: 11,
              }}>
              {POST.place.name}
            </Text>
          </View>
        </View>
        <Pressable style={styles.optionsButton}>
          <Image
            style={styles.optionsIcon}
            source={require('@app/assets/icons/OptionsIcon.png')}
          />
        </Pressable>
      </View>

      <View style={styles.mediaViewer}>
        <Animated.ScrollView
          bounces={false}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          pagingEnabled
          horizontal>
          {POST.media.map((e, i) => (
            <Image
              key={`MEDIA_${i}`}
              style={{
                width: scale(e.size.width),
                height: scale(e.size.height),
              }}
              source={{uri: e.url}}
            />
          ))}
        </Animated.ScrollView>

        <View style={styles.dots}>
          {POST.media.map((e, i) => {
            const _width = scale(e.size.width);
            const inputRange = [(i - 1) * _width, i * _width, (i + 1) * _width];
            const animatedStyles = useAnimatedStyle(() => {
              return {
                backgroundColor: interpolateColor(scrollX.value, inputRange, [
                  '#CCC',
                  '#3897F0',
                  '#CCC',
                ]),
              };
            });
            return (
              <Animated.View
                key={`MEDIA_${i}`}
                style={[styles.dot, animatedStyles]}
              />
            );
          })}
        </View>
      </View>

      <View style={{paddingHorizontal: 15}}>
        <View style={styles.actionsBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                width: scale(24),
                height: scale(21),
                resizeMode: 'contain',
                marginRight: scale(17),
              }}
              source={require('@app/assets/icons/LikeIcon.png')}
            />
            <Image
              style={{
                width: scale(22),
                height: scale(23),
                resizeMode: 'contain',
                marginRight: scale(17),
              }}
              source={require('@app/assets/icons/CommentIcon.png')}
            />
            <Image
              style={{
                width: scale(23),
                height: scale(20),
                resizeMode: 'contain',
              }}
              source={require('@app/assets/icons/MessangerIcon.png')}
            />
          </View>

          <Image
            style={{
              width: scale(21),
              height: scale(24),
              resizeMode: 'contain',
            }}
            source={require('@app/assets/icons/SaveIcon.png')}
          />
        </View>

        <View style={styles.likesContainer}>
          <Image
            style={styles.likeImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1645504812848-29c2ebd5cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            }}
          />
          <Text style={{fontSize: scale(13), color: '#262626'}}>
            Liked by <Text style={{fontWeight: 'bold'}}>craig_love</Text> and{' '}
            <Text style={{fontWeight: 'bold'}}>44,686 others</Text>
          </Text>
        </View>

        <Text style={styles.description}>
          <Text style={styles.descriptionUsername}>{POST.user.username} </Text>
          {POST.description}
        </Text>

        <Text
          style={{
            fontSize: scale(12),
            color: 'rgba(0,0,0,0.4)',
          }}>
          2d ago
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    height: scale(54),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  optionsButton: {
    height: '100%',
    width: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 32 / 2,
    marginRight: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  name: {
    fontSize: 13,
    letterSpacing: -0.1,
    fontWeight: '600',
  },
  optionsIcon: {
    width: 14,
    height: 3,
    resizeMode: 'contain',
  },
  verifyIcon: {
    width: 10,
    height: 10,
    marginLeft: 3,
  },
  actionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  description: {
    fontSize: scale(13),
    color: '#262626',
    letterSpacing: scale(-0.07),
    marginBottom: scale(8),
  },
  descriptionUsername: {fontWeight: 'bold', letterSpacing: scale(-0.1)},
  likeImage: {
    width: scale(17),
    height: scale(17),
    borderRadius: scale(17) / 2,
    marginRight: scale(6.5),
  },
  mediaViewer: {
    alignItems: 'center',
    marginBottom: scale(12),
  },
  dots: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: scale(-25),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(6) / 2,
    backgroundColor: 'rgba(0,0,0,0.15)',
    marginHorizontal: scale(2),
  },
  likesContainer: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
});
