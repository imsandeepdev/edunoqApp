import * as React from 'react';
import {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

import R from '../../Res/R';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton, AppTextInput, StoryScreen } from '../../Components';
import Style from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDemoRequest } from '../../ReduxSaga/Slice/Demo/demoSlice';

const LoginScreen = (props:any) => {

  const dispatch = useDispatch<any>();
  const demoState = useSelector((state: any) => state.demo);

  useEffect(() => {
    if (demoState.data) {
      console.log('API Response:==>Demo Data:', demoState.data);
    }
    if (demoState.error) {
      console.log('API Response:==>Demo Error:', demoState.error);
    }
  }, [demoState]);


  const [mobno, setMobno] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    console.log('Login Mobile No:', mobno);
    console.log('Login Password:', password);
    props.navigation.navigate("Dashboard")
    // dispatch(fetchDemoRequest());

  }

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
                    {'Login to continue your learning journey'}
                  </Text>
                </View>

                <AppTextInput
                  title={'Mobile No'}
                  icon={R.image.mobileIcon}
                  // placeholder={'Enter Mobile No'}
                  value={mobno}
                  onChangeText={(number) => setMobno(number)}
                  keyboardType={'number-pad'}
                  maxLength={10}
                />
                <AppTextInput
                  title={'Password'}
                  icon={R.image.passwordIcon}
                  // placeholder={'Enter password'}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  maxLength={40}
                  secureTextEntry={true}
                />
              </View>
             
            </View>
             <View style={Style.bottomButtonView}>

                <AppButton
                  onPress={() => handleLogin()}
                  marginHorizontal={R.fontSize.Size60}
                  title={'Login'}
                  paddingVertical={R.fontSize.Size16}
                />
              
              
              </View>
          </ScrollView>
        
      </View>
    </StoryScreen>
  );
};

export default LoginScreen;
