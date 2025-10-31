import { StyleSheet } from 'react-native';
import R from '../../Res/R';

const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: R.colors.lightWhite,
  },
  topIconView: {
    marginTop: 40,
    marginBottom: 20,
  },
  topIcon: {
    height: 80,
    width: 200,
  },
  topTitleText: {
    fontSize: R.fontSize.Size22,
    fontWeight: 'bold',
    color: R.colors.black,
    marginBottom: 10,
  },
  subTitleText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.placeholderTextColor,
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: R.colors.appColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    elevation: 2,
  },
  verifyButton: {
    backgroundColor: R.colors.appColor,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    elevation: 3,
  },
  verifyButtonText: {
    color: R.colors.lightWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 14,
    color: R.colors.appColor,
    textDecorationLine: 'underline',
  },
});

export default Style;
