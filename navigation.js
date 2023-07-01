import React, {  useContext,} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, NavigationContext, } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import IntroScreen from "./screens/IntroScreen";
import AuthScreen from "./screens/AuthScreen";
import PinScreen from "./screens/PinScreen";
import THook from "./screens/THook";
import Timetable from "./screens/Timetable";
import UnitDetails from "./screens/UnitDetails";
import Home from "./screens/Home";


//Screens

const store = configureStore();
export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  const navigation = useContext(NavigationContext) 
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IntroScreen" screenOptions={screenOptions}>
          <Stack.Screen name="IntroScreen" component={IntroScreen} /> 
          <Stack.Screen name="AuthScreen" component={AuthScreen} /> 
          <Stack.Screen name="PinScreen" component={PinScreen} /> 
          <Stack.Screen name="THook" component={THook} /> 
          <Stack.Screen name="Timetable" component={Timetable} /> 
          <Stack.Screen name="UnitDetails" component={UnitDetails} /> 
          <Stack.Screen name="Home" component={Home} /> 
        </Stack.Navigator>
      
      </NavigationContainer>
    </ReduxProvider>
  );
}
