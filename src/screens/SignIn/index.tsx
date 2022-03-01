import {ScreenProps} from '@app/@types/navigation';
import {scale} from '@app/utils';
import * as React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SignInScreen = (props: ScreenProps<RootNavigatorParmsList, 'SignIn'>) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* <Text>SignInScreen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
        <Text>Ir al registro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
        <Text>Ir al main</Text>
      </TouchableOpacity> */}

      <Pressable
        style={{
          position: 'absolute',
          top: insets.top + 16,
          left: scale(16),
        }}
        onPress={() => props.navigation.goBack()}>
        <Image
          style={{
            resizeMode: 'contain',
            width: scale(20),
            height: scale(20),
          }}
          source={require('@app/assets/icons/BackIcon.png')}
        />
      </Pressable>

      <Image
        style={{
          width: scale(182),
          height: scale(49),
          resizeMode: 'contain',
        }}
        source={require('@app/assets/images/InstagramLogo.png')}
      />

      <View style={styles.body}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={[
            styles.input,
            {
              marginBottom: scale(19),
            },
          ]}
          placeholder="Password"
        />

        <TouchableOpacity>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Log in</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: scale(41),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.grayLine} />
          <Text
            style={{
              color: 'rgba(0,0,0,0.4)',
              fontWeight: '600',
              fontSize: scale(12),
              marginHorizontal: scale(30),
            }}>
            OR
          </Text>
          <View style={styles.grayLine} />
        </View>

        <Text
          style={{
            color: 'rgba(0,0,0,0.4)',
            textAlign: 'center',
            marginTop: scale(41),
          }}>
          Don't have an account?{' '}
          <Text
            style={{
              color: '#3797EF',
            }}
            onPress={() => props.navigation.navigate('SignUp')}>
            Sign up.
          </Text>
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: scale(79),
          justifyContent: 'center',
          alignItems: 'center',

          borderTopWidth: 0.33,
          borderTopColor: 'rgba(0,0,0,0.2)',
        }}>
        <Text
          style={{
            color: 'rgba(0,0,0,0.4)',
            fontSize: scale(12),
          }}>
          Instagram from Facebook
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    marginBottom: scale(12),
    paddingVertical: scale(13.5),
    borderRadius: scale(5),
    paddingHorizontal: scale(15),

    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  body: {
    paddingHorizontal: 16,
    width: '100%',
    marginTop: scale(39),
  },
  link: {
    color: '#3797EF',
    fontWeight: '500',
    textAlign: 'right',
    marginBottom: scale(30),
  },
  button: {
    backgroundColor: '#3797EF',
    height: scale(44),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayLine: {
    flex: 1,
    height: 0.33,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
