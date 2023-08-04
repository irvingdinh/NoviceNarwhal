import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React, { type JSX } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import theme from './src/features/core/theme'

export default function App (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
