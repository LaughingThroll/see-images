import React from 'react'
import { StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native'

interface IModalItem {
  title: string
  url: string
  // onPressItem: () => void
}

const ModalItem = ({ title, url }: IModalItem) => {
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



export default ModalItem
