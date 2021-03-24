import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

const ModalScreen = () => {
  const route = useRoute<any>()
  const { title, url } = route.params?.item
  return (
    <>
      <Text style={styles.title} >{title}</Text>
      <Image style={styles.image} source={{ uri: url }} />
    </>

  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 24
  },
  image: {
    height: 600
  }
})

export default ModalScreen
