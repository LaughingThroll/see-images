import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { IModalItem } from '../types/modalItem'

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
