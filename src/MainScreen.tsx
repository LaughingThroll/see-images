import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, FlatList, Text } from 'react-native'

import { TRootState } from './store/store'
import { getImages } from './store/slices/imagesSlice'

import { Header, ImageItem, Loader } from './components'

import { Routes } from './types/routes'


interface IMainScreen {
  navigation: any
} 

const MainScreen = ({ navigation }: IMainScreen) => {
  const dispatch = useDispatch()
  const { error, imagesData } = useSelector((state: TRootState) => state.images)

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    dispatch(getImages(page))
  }, [page])


  return (
    <>
      {!!error && <Text>{error}</Text>}

      <Header />
      <FlatList
        style={styles.container}
        data={imagesData}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={.5}
        renderItem={({ item }) => <ImageItem {...item} onPressImage={() => navigation.navigate(Routes.MODAL, { item } ) } />}
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

export default MainScreen
