import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './Drawernavigation'

export default function Rootnavigaton(){
    return(
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}