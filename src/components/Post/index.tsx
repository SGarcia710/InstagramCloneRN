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
import Animated from 'react-native-reanimated';

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
  ],
  description: 'The game in Japan was amazing and I want to share some photos',
  place: {
    name: 'Tokyo, Japan',
  },
};

const Post = (props: Post) => {
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

      <Animated.ScrollView
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

      <View style={{paddingHorizontal: 15}}>
        <View style={styles.actionsBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                width: 24,
                height: 21,
                resizeMode: 'contain',
                marginRight: 17,
              }}
              source={require('@app/assets/icons/LikeIcon.png')}
            />
            <Image
              style={{
                width: 22,
                height: 23,
                resizeMode: 'contain',
                marginRight: 17,
              }}
              source={require('@app/assets/icons/CommentIcon.png')}
            />
            <Image
              style={{
                width: 23,
                height: 20,
                resizeMode: 'contain',
              }}
              source={require('@app/assets/icons/MessangerIcon.png')}
            />
          </View>

          <Image
            style={{
              width: 21,
              height: 24,
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
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 11,
  },
  description: {
    fontSize: scale(13),
    color: '#262626',
    letterSpacing: scale(-0.07),
  },
  descriptionUsername: {fontWeight: 'bold', letterSpacing: scale(-0.1)},
  likeImage: {
    width: scale(17),
    height: scale(17),
    borderRadius: scale(17) / 2,
    marginRight: scale(6.5),
  },
  likesContainer: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
});
