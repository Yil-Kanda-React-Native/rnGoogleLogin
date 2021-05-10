import React from 'react';
import {View, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {WEB_CLIENT_ID} from '@env';

const App = () => {
  return (
    <View>
      <GoogleSigninButton
        title={'Login with Google'}
        onPress={() => {
          GoogleSignin.configure({
            androidClientId: WEB_CLIENT_ID,
          });
          async function signIn() {
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              console.log(userInfo);
            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('You cancelled the sign in.');
              } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Google sign In operation is in process');
              } else if (
                error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
              ) {
                alert('Play Services not available');
              } else {
                alert(
                  'Something unknown went wrong with Google sign in. ' +
                    error.message,
                );
              }
            }
          }
          signIn();
        }}
      />

      <Button
        title={'Logout with Google'}
        onPress={() => {
          GoogleSignin.configure({
            androidClientId: WEB_CLIENT_ID,
          });
          async function signOut() {
            try {
              await GoogleSignin.revokeAccess();
              const userInfo = await GoogleSignin.signOut();
              console.log(userInfo);
            } catch (error) {
              console.error(error);
            }
          }
          signOut();
        }}
      />
    </View>
  );
};

export default App;
