import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Homescreen from '../screens/Homescreen'
import { Stacknavigation } from './Stacknavigation'
import { Icon } from '@rneui/base';
import { colors } from '../global/style';

const Drawer = createDrawerNavigator()

export default function Drawernavigation(){
    return(
            <Drawer.Navigator>
                <Drawer.Screen name="Stacknavigation" 
                component={Stacknavigation}
                options={{
                    title : 'client',
                    drawerIcon : ({focussed, size})=>
                                 <Icon type='material'  name="home" color={focussed ? '#7cc' : colors.grey2} size={size} />,
                     headerShown : false
                  }}/>
            </Drawer.Navigator>
    )

}