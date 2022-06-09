import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Rootnavigaton from './src/navigations/Rootnavigation'
import { DestinationProvider, OriginProvider } from './src/contexts/contexts'




const App = () => {

  return (
    <DestinationProvider>
      <OriginProvider>

        <Rootnavigaton />
      </OriginProvider>

    </DestinationProvider>
    
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})