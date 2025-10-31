import { StyleSheet } from "react-native";
import R from "../../Res/R";

const styles = StyleSheet.create({
  pressView: {
    alignItems: 'flex-end',
    marginHorizontal: R.fontSize.Size10,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: R.colors.lightWhite,
    marginHorizontal: R.fontSize.Size20,
    borderRadius: R.fontSize.Size8,
    padding: R.fontSize.Size8,
    borderWidth: 1,
    paddingVertical: R.fontSize.Size14,
    borderColor: R.colors.placeHolderColor,
  },
  texInputView: {
    marginHorizontal: R.fontSize.Size8,
    height: R.fontSize.Size50,
    width: R.fontSize.Size50,
    borderRadius: R.fontSize.Size8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: R.colors.appColor,
  },
  textInputStyle: {
    textAlign: 'center',
    fontSize: R.fontSize.Size14,
    height: R.fontSize.Size50,
    width: R.fontSize.Size50,
    borderRadius: R.fontSize.Size8,
    color: R.colors.black,
    paddingVertical: R.fontSize.Size2,
    fontWeight: '500',
  },
  otpTitle: {
    fontSize: R.fontSize.Size12,
    color: R.colors.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  flexWithCenter: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  optContainer: {
    marginHorizontal: R.fontSize.Size10,
    width: R.fontSize.Size60,
    borderWidth: 1,
    borderColor: R.colors.lightBlack,
    height: R.fontSize.Size50,
    borderRadius: R.fontSize.Size6,
    backgroundColor: R.colors.lightWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpTextInput: {
    textAlign: 'center',
    fontSize: R.fontSize.large,
    height: R.fontSize.Size50,
    width: R.fontSize.Size50,
    color: R.colors.black,
    fontWeight: '700',
  },
});
export default styles;