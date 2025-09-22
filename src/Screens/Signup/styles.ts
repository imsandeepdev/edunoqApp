import {StyleSheet, Dimensions} from 'react-native';
import R from '../../Res/R';
const screenHeight = Dimensions.get('screen').height;

const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexView: {
    flex: 1,
  },
  topIconView: {
    paddingTop: R.fontSize.Size20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcon: {
    height: 200,
    width: 200,
  },
  topTitleText: {
    fontSize: R.fontSize.large,
    fontWeight: '500',
    color: R.colors.black,
    textAlign: 'center',
  },
  edunoqText: {
    fontSize: R.fontSize.EXXXLarge,
    fontWeight: '800',
    color: R.colors.appColor,
    textAlign: 'center',

    borderBottomWidth:0.5,
    marginHorizontal:40,
    borderColor:R.colors.placeHolderColor

  },
  subTitleText: {
    marginTop: R.fontSize.Size5,
    marginBottom: R.fontSize.Size20,
    fontSize: R.fontSize.Size14,
    color: R.colors.textPriColor,
    textAlign: 'center',
    fontWeight: '500',
  },
  bodeView: {
    flex: 1,
    marginHorizontal: R.fontSize.Size30,
  },
  bottomButtonView: {
    marginVertical: R.fontSize.Size10,
  },
});

export default Style;
