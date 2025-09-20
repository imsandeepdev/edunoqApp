/**
 * EDUNOQ APP
 * Copyright (c) 2025 EduNoq. All rights reserved.
 * Sandeep Dev
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AppNavigator from './src/Navigator/AppNavigator';
import { Provider } from 'react-redux';
import { getStore } from './src/ReduxSaga/Store/store';

function App() {
  const store = getStore();

  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
    </Provider>
  );
}



export default App;
