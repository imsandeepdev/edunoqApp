import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  TextInput,
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
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  rightOnPress?: () => void;
  buttonText?: string;
  title?: string;
};

const AppTextInput = React.forwardRef<TextInput, AppTextInputProps>((props, ref) => {
  return (
    <View style={Style.topView}>
      <View style={Style.mainView}>
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
