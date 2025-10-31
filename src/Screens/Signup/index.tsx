
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import R from '../../Res/R';
import { AppButton, AppTextInput, StoryScreen } from '../../Components';
import Style from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUpRequest } from '../../ReduxSaga/Slice/SignUp/SignUpSlice';
import { RootState } from '../../ReduxSaga/Store/store'; // adjust path

export type RootStackParamList = {
  SignUp: undefined;
  OtpScreen: { name: string; mobile: string; password: string };
};

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SIGNUP = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

   // read API state
  const { isAPILoading, data, error } = useSelector(
    (state: RootState) => state.SignUp,
  );

  const handleSignIn = () => {
    if (!name || !mobile || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (password !== confirmpassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

     // 🔹 Dispatch saga action
    dispatch(fetchSignUpRequest({ name, mobile, password }));
  };

    
  // Optionally react to success/failure
  React.useEffect(() => {
    if (data) {
      Alert.alert('Success', 'Signup successful');
      navigation.navigate('OtpScreen', { name, mobile, password });
    }
    if (error) {
      Alert.alert('Error', error.message || 'Signup failed');
    }
  }, [data, error]);

  return (
    <StoryScreen>
      <View style={Style.mainView}>
        <ScrollView contentContainerStyle={Style.flexGrow}>
          <View style={Style.flexView}>
            <View style={Style.topIconView}>
              <Image
                source={R.image.edunoqLogo}
                resizeMode={'contain'}
                style={Style.topIcon}
              />
            </View>

            <View style={Style.bodeView}>
              <View>
                <Text style={Style.topTitleText}>{'Welcome to'}</Text>
                <Text style={Style.edunoqText}>{'EDUNOQ'}</Text>
                <Text style={Style.subTitleText}>
                  {'Signin to continue your learning journey'}
                </Text>
              </View>

              <AppTextInput
                title={'Name'}
                icon={R.image.nameIcon}
                placeholder={'Enter Name'}
                value={name}
                onChangeText={setName}
                keyboardType={'default'}
                maxLength={30}
              />

              <AppTextInput
                title={'Mobile No'}
                icon={R.image.mobileIcon}
                placeholder={'Enter Mobile No'}
                value={mobile}
                onChangeText={setMobile}
                keyboardType={'number-pad'}
                maxLength={10}
              />

              <AppTextInput
                title={'Password'}
                icon={R.image.passwordIcon}
                placeholder={'Enter password'}
                value={password}
                onChangeText={setPassword}
                maxLength={40}
                secureTextEntry={true}
              />

              <AppTextInput
                title={'Confirm Password'}
                icon={R.image.passwordIcon}
                placeholder={'Enter confirm password'}
                value={confirmpassword}
                onChangeText={setConfirmPassword}
                maxLength={40}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={Style.bottomButtonView}>
            <AppButton
              onPress={handleSignIn}
              marginHorizontal={R.fontSize.Size60}
              title={'SignIn'}
              paddingVertical={R.fontSize.Size16}
            />
          </View>
        </ScrollView>
      </View>
    </StoryScreen>
  );
};

export default SIGNUP;
