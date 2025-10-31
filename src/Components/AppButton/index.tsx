/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Pressable, Text} from 'react-native';
import R from '../../Res/R';

interface AppButtonProps {
    flex?: number;
    borderRadius?: number;
    backgroundColor?: string;
    paddingHorizontal?: number;
    paddingVertical?: number;
    borderWidth?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    borderColor?: string;
    disabled?: boolean;
    onPress?: () => void;
    textColor?: string;
    title: string;
    titleFontSize?: number;  
}

const AppButton: React.FC<AppButtonProps> = (props) => {
    return (
        <View
            style={{
                flex: props.flex,
                borderRadius: R.fontSize.Size5,
                backgroundColor: props.backgroundColor ?? R.colors.appColor,
                paddingHorizontal: R.fontSize.Size10,
                paddingVertical: props.paddingVertical
                    ? props.paddingVertical
                    : R.fontSize.Size5,
                borderWidth: props.borderWidth,
                marginHorizontal: props.marginHorizontal,
                marginVertical: props.marginVertical,
                borderColor: props.borderColor
                    ? props.borderColor
                    : R.colors.placeholderTextColor,
            }}>
            <Pressable
                disabled={props.disabled}
                onPress={props.onPress}
                style={({pressed}: {pressed: boolean}) => [
                    {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: pressed ? 0.5 : 1,
                    },
                ]}>
                <Text
                    style={{
                        fontSize: R.fontSize.Size14,
                        color: props.textColor ?? R.colors.white,
                        fontWeight: '600',
                    }}>
                    {props.title}
                </Text>
            </Pressable>
        </View>
    );
};
export default AppButton;
