import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import R from '../../Res/R';

import type { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import Style from './styles';

type AppTextInputProps = {
  icon: any;
  placeholder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  rightOnPress?: () => void;
  buttonText?: string;
  title?: string;
};

const AppTextInput = React.forwardRef<TextInput, AppTextInputProps>((props, ref) => {
  
//   const animatedValue = React.useRef(new Animated.Value(props.value ? 1 : 0))
//       .current;

//     // animate when value changes
//     React.useEffect(() => {
//       Animated.timing(animatedValue, {
//         toValue: props.value ? 1 : 0,
//         duration: 200,
//         easing: Easing.ease,
//         useNativeDriver: false,
//       }).start();
//     }, [props.value]);

//     const labelTranslateY = animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [12, -10], // adjust as per design
//     });

//     const labelTranslateX = animatedValue.interpolate({
//   inputRange: [0, 1],
//   outputRange: [0, -40], // Slight right → Left edge
// });


//     const labelFontSize = animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [14, 11],
//     });

//     const handleFocus = () => {
//       Animated.timing(animatedValue, {
//         toValue: 1,
//         duration: 200,
//         easing: Easing.ease,
//         useNativeDriver: false,
//       }).start();
//       props.onFocus?.();
//     };

//      const handleBlur = () => {
//       if (!props.value) {
//         Animated.timing(animatedValue, {
//           toValue: 0,
//           duration: 200,
//           easing: Easing.ease,
//           useNativeDriver: false,
//         }).start();
//       }
//       props.onBlur?.();
//     };
  
  return (
    <View style={Style.topView}>
      <View style={Style.mainView}>
                {/* <Animated.View
            style={[
              Style.absoluteView,
              {
                transform: [{ translateY: labelTranslateY },{translateX: labelTranslateX }],
                paddingVertical: 2,
                paddingHorizontal: 8,
                borderRadius: 4,
                backgroundColor: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['transparent', R.colors.appColor], // transparent → white background
                }),
              },
            ]}>
            <Animated.Text
              style={[
                Style.headerTitle,
                {
                  fontSize: labelFontSize,
                  color: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [R.colors.placeholderTextColor, R.colors.lightWhite],
                  }),
                },
              ]}>
              {props.title}
            </Animated.Text>
          </Animated.View> */}
         
        <View style={Style.bodyView}>
          <View style={Style.leftIconView}>
            <Image
              source={props.icon}
              resizeMode={'contain'}
              style={Style.leftIcon}
            />
          </View>
          <View style={Style.flexView}>
            <TextInput
              ref={ref}
              style={Style.textInput}
              placeholder={props.placeholder}
              keyboardType={props.keyboardType ?? 'default'}
              maxLength={props.maxLength}
              value={props.value}
              onChangeText={props.onChangeText}
              onFocus={props.onFocus}
              secureTextEntry={props.secureTextEntry}
              returnKeyType={props.returnKeyType}
              onSubmitEditing={props.onSubmitEditing}
            />
          </View>

          <Pressable
            onPress={props.rightOnPress}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.5 : 1,
                paddingHorizontal: R.fontSize.Size6,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={{
                fontSize: R.fontSize.Size12,
                color: R.colors.textSecColor,
                fontWeight: '500',
              }}>
              {props.buttonText}
            </Text>
          </Pressable>
        </View>
        <View style={Style.absoluteView}>
          <View style={Style.headerMainView}>
            <Text style={Style.headerTitle}>{props.title}</Text>
          </View>
        </View>

      </View>
    </View>
  );
});

export default AppTextInput;
