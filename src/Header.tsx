import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
  <View style={styles.header}>
    <Text style={styles.headerText}>See Images</Text>
  </View> 
  ) 
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#ACEEF3',    
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30
  }
})

export default Header
