import React from 'react';  
import "react-native-url-polyfill/auto"      
import RootNavigation from './navigation';
import { AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { COLORS } from './constants/theme';
const IColors = {
  label: COLORS.white,
  card: COLORS.primary,
  overlay: 'rgba(0, 0, 0, 0.5)',
  success: COLORS.green,
  danger: COLORS.rose,
  warning: COLORS.gold,
};
const defaultProps = {
  dialogConfig: {},
  toastConfig: {},
  theme: 'dark',
  colors: [IColors, IColors],
};

const App = ({ dialogConfig, toastConfig, theme, colors }) => {
  return (
    <AlertNotificationRoot dialogConfig={dialogConfig ?? defaultProps.dialogConfig} toastConfig={toastConfig ?? defaultProps.toastConfig} theme={theme ?? defaultProps.theme} colors={colors ?? defaultProps.colors}>
      <RootNavigation />
    </AlertNotificationRoot>
  );
};

App.defaultProps = defaultProps;

export default App;