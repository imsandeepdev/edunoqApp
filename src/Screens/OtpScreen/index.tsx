import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { StoryScreen } from '../../Components';
import R from '../../Res/R';
import Style from './styles';

const OtpScreen = ({ route, navigation }: any) => {
  const { name, mobile, password } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [correctOtp] = useState('1234');

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      
      if (index < otp.length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else if (text === '') {
     
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === correctOtp) {
      Alert.alert('✅ Success', `Welcome ${name}, Signup Complete!`);
      navigation.navigate('HomeScreen', { name, mobile, password });
    } else {
      Alert.alert('❌ Error', 'Invalid OTP. Please try again.');
      setOtp(['', '', '', '']);
      inputs.current[0]?.focus();
    }
  };

  return (
    <StoryScreen>
      <View style={Style.mainView}>
       
        <View style={Style.topIconView}>
          <Image
            source={R.image.edunoqLogo}
            resizeMode="contain"
            style={Style.topIcon}
          />
        </View>

     
        <Text style={Style.topTitleText}>OTP Verification</Text>
        <Text style={Style.subTitleText}>
          Enter the 4-digit code sent to{' '}
          <Text style={{ fontWeight: 'bold' }}>{mobile}</Text>
        </Text>

       
        <View style={Style.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => {
                inputs.current[index] = el; 
              }}
              style={Style.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity style={Style.verifyButton} onPress={handleVerify}>
          <Text style={Style.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={{ marginTop: 15 }}>
          <Text style={Style.resendText}>
            Didn’t receive the code? Resend
          </Text>
        </TouchableOpacity>
      </View>
    </StoryScreen>
  );
};

export default OtpScreen;
