import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DrawerSceneWrapper from '@/components/drawer-scene-wrapper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Help = () => {
  const navigation = useNavigation();
  return (
    <DrawerSceneWrapper>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Help</Text>
          <View style={styles.rightSpace} />
        </View>
        <View style={styles.content}>
          <Text>Help</Text>
        </View>
      </SafeAreaView>
    </DrawerSceneWrapper>
  )
}

export default Help

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