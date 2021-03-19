import React from 'react'
import { TouchableHighlight, StyleSheet, Image } from 'react-native'

import { IImageItem } from './types/imageItem'

interface IImageItemComponent extends IImageItem {
  onPressImage?: () => void
}

const ImageItem = ({ thumbnailUrl, onPressImage }: IImageItemComponent) => {
  return (
    <TouchableHighlight style={styles.wrapper} onPress={onPressImage}>
      <Image
        style={styles.image}
        source={{ uri: thumbnailUrl }}
      />
    </TouchableHighlight>
  )

}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10
  },
  image: {
    height: 150,
  }
})

export default ImageItem
