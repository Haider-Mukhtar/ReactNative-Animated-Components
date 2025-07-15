import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DrawerSceneWrapper from '@/components/drawer-scene-wrapper'
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const Index = () => {
  const navigation = useNavigation();
  return (
    <DrawerSceneWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <View style={styles.rightSpace} />
      </View>
      <View style={styles.content}>
        <Text>Home</Text>
      </View>
    </DrawerSceneWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  menuButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rightSpace: {
    width: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})