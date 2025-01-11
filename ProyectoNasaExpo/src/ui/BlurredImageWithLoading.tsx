import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, type ImageSourcePropType } from 'react-native'
import { BlurView } from 'expo-blur'
import Loading from './Loading'
import { blurImages } from '../constants/blurImages'

interface Props {
  startIndex?: number
  endIndex?: number
}

type aspectRatioType = number

const BlurredImageWithLoading: React.FC<Props> = ({ startIndex = 0, endIndex = blurImages.length }) => {
  const [imagen, setImagen] = useState<ImageSourcePropType | undefined>(undefined)
  const [aspectRatio, setAspectRatio] = useState<aspectRatioType>(16 / 13)

  interface ImageType { image: ImageSourcePropType, index: number }

  const randomImageStatic = (): ImageType => {
    // Selecciona una imagen aleatoria entre las importadas
    const imgMostrar = blurImages.slice(startIndex, endIndex)

    // en caso de que no se haya pasado un índice de inicio se selecciona una imagen aleatoria
    const randomRelative = Math.floor(Math.random() * imgMostrar.length)
    const random = startIndex + randomRelative

    // asegurar de que el índice no exceda el tamaño del array
    const safeIndex = random >= blurImages.length ? blurImages.length - 1 : random

    return { image: blurImages[safeIndex], index: safeIndex }
  }

  useEffect(() => {
    const getImagen = (): void => {
      const { image, index } = randomImageStatic()

      if (index === 0) {
        setAspectRatio(16 / 13)
      } else if (index >= 1 && index <= 2) {
        setAspectRatio(16 / 30)
      } else {
        setAspectRatio(16 / 15)
      }
      setImagen(image)
    }
    getImagen()
  }, [startIndex, endIndex])

  return (
    <View style={styles.container}>
      <View style={styles.fondoCarga}>
        <Loading />
      </View>
      {imagen !== null && (
        <Image source={imagen} style={[styles.image, { aspectRatio }]} />
      )}

      <BlurView
        tint="dark"
        intensity={40}
        style={StyleSheet.absoluteFill}
      />
    </View>
  )
}

export default BlurredImageWithLoading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  },
  fondoCarga: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10 // Para que esté por encima de la imagen
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
