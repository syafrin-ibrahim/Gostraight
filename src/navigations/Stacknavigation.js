import * as React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreen from '../screens/Homescreen';

import Requestscreen from '../screens/Requestscreen';
import Destinationscreen from '../screens/Destinationscreen';

const Stack = createNativeStackNavigator();

export function Stacknavigation(){
    return(
            
            <Stack.Navigator>
            <Stack.Screen 
             name="homescreen"
             component = {Homescreen}
             options={{
               headerShown : false
            }}
            />
            <Stack.Screen 
             name="requestscreen"
             component = {Requestscreen}
             options={{
                headerShown : false
             }}/>
            <Stack.Screen 
             name="destinationscreen"
             component = {Destinationscreen}
             options={{
                headerShown : false
             }}/>
            </Stack.Navigator>
            
        
       
    )
}