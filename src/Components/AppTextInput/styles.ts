import { StyleSheet } from "react-native";
import R from "../../Res/R";

const Style = StyleSheet.create({
  topView: {
    borderRadius: R.fontSize.Size5,
    marginTop: R.fontSize.medium,
  },
  mainView: {
    height: R.fontSize.Size50,
    borderRadius: R.fontSize.Size4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: R.colors.appColor,
  },
  bodyView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: R.colors.appColor,
  },
  leftIconView: {
    width: R.fontSize.Size40,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: R.colors.placeholderTextColor,
  },
  leftIcon: {
    height: R.fontSize.Size26,
    width: R.fontSize.Size26,
  },
  flexView: {
    flex: 1,
  },
  textInput: {
    height: '100%',
    fontSize: R.fontSize.Size14,
    letterSpacing: 1,
    fontWeight: '500',
    color: R.colors.textSecColor,
    marginHorizontal: R.fontSize.Size8,
  },
  absoluteView: {
    position: 'absolute',
    top: -R.fontSize.Size10,
    left: R.fontSize.Size10,
  },
  headerMainView: {
    height: R.fontSize.Size20,
    backgroundColor: R.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: R.fontSize.Size10,
  },
  headerTitle: {
    fontSize: R.fontSize.Size12,
    fontWeight: '500',
    color: R.colors.textPriColor,
  },
});
export default Style;