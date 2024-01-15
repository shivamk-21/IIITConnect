import { Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/Theme'

const SubjectInfo = ({data}) => {
  console.log(data)
  return (
    <View style={styles.SubjectInfo}>
      <Text>SubjectInfo</Text>
    </View>
  )
}

export default SubjectInfo