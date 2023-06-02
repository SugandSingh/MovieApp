import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen/ListScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import { Routes } from './Route';
type StackParamList = {
    [Routes.LISTING_SCREEN]: undefined;
    [Routes.DETAIL_SCREEN]: undefined;

};
export type AppNavigationProps = StackParamList;
const Stack = createNativeStackNavigator<StackParamList>();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={Routes.LISTING_SCREEN}
                    component={ListScreen}
                    options={{
                        title: 'Movie List',
                    }}
                />
                <Stack.Screen
                    name={Routes.DETAIL_SCREEN}
                    component={DetailScreen}
                    options={{ title: ' Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
