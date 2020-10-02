/* eslint-disable */

import * as React from "react"; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './pages/home/index';
import Initial from './pages/initial/index';
import Login from './pages/login/';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator inicialRouteName='Initial' screenOptions={{ headerShown:false}}>
                <Stack.Screen name="Initial" component={Initial}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;