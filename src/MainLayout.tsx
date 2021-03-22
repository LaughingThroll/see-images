import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Modal, FlatList, TouchableOpacity, Text } from 'react-native'

import { RootState } from './store/store'
import { getImages } from './store/slices/imagesSlice'
import { setParams } from './store/slices/modalItemSlice'

import { Header, ImageItem, ModalItem, Loader } from './components'

import { IImageItem } from './types/imageItem'

const MainLayout = () => {
  const dispatch = useDispatch()
  const { error, imagesData } = useSelector((state: RootState) => state.images)
  const { title, url } = useSelector((state: RootState) => state.modalItem)

  const [page, setPage] = useState<number>(1)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getImages(page))
  }, [page])

  const changeModalVisible = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handlerModal = ({ url, title }: IImageItem) => {
    dispatch(setParams({ title, url }))
    changeModalVisible()
  }

  return (
    <>
      {!!error && <Text>{error}</Text>}

      <Modal visible={isOpenModal}>
        <TouchableOpacity onPress={changeModalVisible} >
          <ModalItem title={title} url={url} />
        </TouchableOpacity>
      </Modal>

      <Header />
      <FlatList
        style={styles.container}
        data={imagesData}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={.5}
        renderItem={({ item }) => <ImageItem {...item} onPressImage={handlerModal.bind(null, item)} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Loader />}
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
