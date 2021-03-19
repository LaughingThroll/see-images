import React, { useEffect, useState } from 'react'
import { StyleSheet, Modal, FlatList, TouchableOpacity } from 'react-native'

import Header from './Header'
import ImageItem from './ImageItem'
import ModalItem from './ModalItem'

import { makeRequest } from './utils/makeRequest'
import { URL } from './constant'

import { IImageItem } from './types/imageItem'

const MainLayout = () => {
  const [images, setImages] = useState<IImageItem[]>([])
  const [page, setPage] = useState<number>(1)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [urlImage, setUrlImage] = useState<string>('')


  useEffect(() => {
    makeRequest(`${URL}photos?_page=${page}&_limit=20`).then(imagesData => setImages([...images, ...imagesData])).catch(console.log)
  }, [page])

  const changeModalVisible = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handlerModal = ({ url, title }: IImageItem): void => {
    setTitle(title)
    setUrlImage(url)
    changeModalVisible()
  }

  return (
    <>
      <Modal visible={isOpenModal}>
        <TouchableOpacity onPress={changeModalVisible} >
          <ModalItem title={title} url={urlImage} />
        </TouchableOpacity>
      </Modal>

      <Header />
      <FlatList
        style={styles.container}
        data={images}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={.5}
        renderItem={({ item }) => <ImageItem {...item} onPressImage={handlerModal.bind(this, item)} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  image: {
    height: 150,
    marginBottom: 10
  }

})

export default MainLayout
