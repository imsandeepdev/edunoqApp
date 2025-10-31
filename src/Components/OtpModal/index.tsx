import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
  View,
  Pressable,
  Text,
  Modal,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputKeyPressEventData
} from 'react-native';
import R from '../../Res/R';
import styles from './styles';
import AppButton from '../AppButton';

// Define the props interface
interface OtpModalProps {
  visible: boolean;
  onPress: (otpArray: string[]) => void;
  closeModal: () => void;
  onRequestClose: () => void;
  otpTitle: string;
}

const OtpModal: React.FC<OtpModalProps> = (props) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const otpInputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null)
  ];
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState<number>(45);
  let resendOtpTimerInterval = 1000;
  const [visibleButton, setVisibleButton] = useState<boolean>(false);

  useEffect(() => {
    setOtp(['', '', '', '']);
  }, [props.visible]);

  const handleOtpChange = (val: string, indexVal: number) => {
    const newOtp = [...otp];
    newOtp[indexVal] = val;
    setOtp(newOtp);
    console.log('NEW OTP=>', newOtp.join('').length);
    if (val !== '' && indexVal < 3) {
      otpInputRefs[indexVal + 1].current?.focus();
    }
    const tempNewOtp = newOtp.join('');
    setVisibleButton(tempNewOtp.length === 4);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const keyValue = e.nativeEvent.key;
    console.log(keyValue);
    console.log('Index', index);

    if (index !== undefined && index !== 3) {
      if (keyValue === 'Backspace') {
        otpInputRefs[index - 1]?.current?.focus();
      } else {
        otpInputRefs[index + 1]?.current?.focus();
      }
    } else if (index === 3 && keyValue === 'Backspace') {
      otpInputRefs[index - 1]?.current?.focus();
    }
  };

  const handleOnFocus = (
    e: NativeSyntheticEvent<any>,
    index: number
  ) => {
    if (index !== undefined && otp[index] !== '') {
      const newOtp = [...otp];
      for (let i = index; i <= otp.length - 1; i++) {
        newOtp[i] = '';
      }
      console.log('N==>', newOtp);
      setOtp(newOtp);
      const tempNewOtp = newOtp.join('');
      setVisibleButton(tempNewOtp.length === 4);
    }
  };

  const handleOnSubmitOtp = () => {
    props.onPress(otp);
  };

  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainView}>
          <View style={styles.modalView}>
            <View style={styles.pressView}>
              <Pressable
                onPress={props.closeModal}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                    borderWidth: 1,
                    borderRadius: R.fontSize.Size2,
                    borderColor: R.colors.lightBlack,
                  },
                ]}
              >
                <Image
                  source={R.image.closeIcon}
                  style={{
                    height: R.fontSize.Size20,
                    width: R.fontSize.Size20,
                  }}
                  resizeMode={'contain'}
                />
              </Pressable>
            </View>

            <View style={{ marginVertical: R.fontSize.Size10 }}>
              <Text style={styles.otpTitle}>{props.otpTitle}</Text>
              <Text style={[styles.otpTitle, { marginTop: R.fontSize.Size5 }]}>
                {'Enter OTP code below'}
              </Text>
            </View>

            <View style={styles.viewRow}>
              {otp.length !== undefined &&
                otp.map((digit, index) => (
                  <View key={`otp_${index}`} style={styles.optContainer}>
                    <TextInput
                      value={digit}
                      style={[
                        styles.otpTextInput,
                        {
                          marginTop: Platform.OS === 'android' ? R.fontSize.Size5 : 0,
                        },
                      ]}
                      maxLength={1}
                      onChangeText={(value) => handleOtpChange(value, index)}
                      ref={otpInputRefs[index]}
                      keyboardType={'numeric'}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      onFocus={(e) => handleOnFocus(e, index)}
                    />
                  </View>
                ))}
            </View>

            <View style={{ marginTop: R.fontSize.Size20 }}>
              <AppButton
                disabled={!visibleButton}
                onPress={handleOnSubmitOtp}
                marginHorizontal={R.fontSize.Size100}
                title={'Verify'}
                paddingVertical={R.fontSize.Size10}
                titleFontSize={R.fontSize.Size16}
                backgroundColor={
                  visibleButton ? R.colors.appColor : R.colors.placeholderTextColor
                }
                textColor={
                  visibleButton ? R.colors.lightWhite : R.colors.placeHolderColor
                }
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default OtpModal;

