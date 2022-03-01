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
import FirebaseAuth from '@react-native-firebase/auth';

const SignUpScreen = (props: ScreenProps<RootNavigatorParmsList, 'SignUp'>) => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    if (!form.email || !form.password) return;

    try {
      const response = await FirebaseAuth().createUserWithEmailAndPassword(
        form.email,
        form.password,
      );

      console.log('🔥', response);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: scale(182),
          height: scale(49),
          resizeMode: 'contain',
        }}
        source={require('@app/assets/images/InstagramLogo.png')}
      />

      <View style={styles.body}>
        <TextInput
          value={form.email}
          textContentType="emailAddress"
          onChangeText={e => setForm({...form, email: e})}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry
          value={form.password}
          onChangeText={e => setForm({...form, password: e})}
          style={[
            styles.input,
            {
              marginBottom: scale(19),
            },
          ]}
          placeholder="Password"
        />

        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={{color: 'white'}}>Sign up</Text>
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
          Do you have an account?{' '}
          <Text
            style={{
              color: '#3797EF',
            }}
            onPress={() => props.navigation.navigate('SignIn')}>
            Log in.
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

export default SignUpScreen;

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
