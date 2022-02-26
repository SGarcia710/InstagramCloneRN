import {ScreenProps} from '@app/@types/navigation';
import * as React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {Modalize} from 'react-native-modalize';
import {
  GiphyContent,
  GiphyGridView,
  GiphyMedia,
  GiphyMediaType,
  GiphySDK,
} from '@giphy/react-native-sdk';
import Sticker from './auxilars/Sticker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

GiphySDK.configure({apiKey: 'Pcd3LK0AaX4BovN4QACz3MI0fao6vn0J'});

const {width, height} = Dimensions.get('window');

interface StoryCreatorScreenProps
  extends ScreenProps<RootNavigatorParmsList, 'StoryCreator'> {}

const StoryCreatorScreen = (props: StoryCreatorScreenProps) => {
  const modalizeRef = React.useRef<Modalize>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [media, setMedia] = React.useState<Array<GiphyMedia>>([]);
  const insets = useSafeAreaInsets();
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/7148953/pexels-photo-7148953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
          style={StyleSheet.absoluteFillObject}
        />

        <Pressable
          style={{
            position: 'absolute',
            left: 17,
            top: 16 + insets.top + 10,
            zIndex: 2,
          }}
          onPress={() => props.navigation.goBack()}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 20,
              height: 20,
              tintColor: 'white',
            }}
            source={require('@app/assets/icons/BackIcon.png')}
          />
        </Pressable>

        <Pressable
          style={{
            position: 'absolute',
            right: 17,
            top: 16 + insets.top,
            zIndex: 2,
          }}
          onPress={onOpen}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 35,
              height: 30,
            }}
            source={require('@app/assets/icons/StickerIcon.png')}
          />
        </Pressable>

        {media.map((sticker, i) => {
          return (
            <Sticker
              key={`STICKER__${sticker.id}_${i}`}
              imageUrl={sticker.data.images.original.url}
            />
          );
        })}
      </View>

      <Modalize
        modalHeight={height * 0.8}
        modalStyle={{
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
        ref={modalizeRef}>
        <BlurView
          blurType="dark"
          reducedTransparencyFallbackColor="white"
          style={{
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }}
        />
        <View
          style={{
            paddingTop: 14,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'rgba(255,255,255,0.75)',
              height: 34,
              borderRadius: 8,
              paddingLeft: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('@app/assets/icons/SearchIcon.png')}
              style={{
                tintColor: 'white',
                width: 16,
                height: 16,
                marginRight: 8,
              }}
            />
            <TextInput
              autoFocus
              onChangeText={setSearchQuery}
              placeholder="Search..."
              value={searchQuery}
              placeholderTextColor="white"
              style={{
                color: 'white',
              }}
            />
          </View>
          <GiphyGridView
            content={
              searchQuery
                ? GiphyContent.search({
                    searchQuery: searchQuery,
                    mediaType: GiphyMediaType.Sticker,
                  })
                : GiphyContent.trendingStickers()
            }
            cellPadding={3}
            style={{
              height: height * 0.8 - 34,
              marginTop: 24,
            }}
            onMediaSelect={e => {
              setMedia([...media, e.nativeEvent.media]);
              onClose();
            }}
          />
        </View>
      </Modalize>
    </>
  );
};

export default StoryCreatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
