import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <TouchableOpacity style={styles.userContainer}>
        <View>
          <Image
            source={{ uri: "https://ik.imagekit.io/haidermukhtar/LinkedIn%20Profile.jpg?updatedAt=1752550994760" }}
            contentFit="cover"
            style={styles.userImage}
          />
        </View>
        <View>
          <Text style={styles.userName}>Haider Mukhtar</Text>
          <Text style={styles.userEmail}>haidermukhtarch405@gmail.com</Text>
        </View>
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutButton}>
        <View style={styles.logoutButtonContent}>
          <Ionicons
            name="log-out"
            size={24}
            color={"#FFFFFF"}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 12,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  userName: {
    fontSize: 18,
    fontFamily: "PoppinsMedium500",
    color: "#FFFFFF",
  },
  userEmail: {
    fontSize: 12,
    fontFamily: "PoppinsLight300",
    color: "#FFFFFF",
  },
  logoutButton: {
    marginTop: 20,
    marginLeft: 12,
    marginBottom: 20,
    padding: 2,
    borderWidth: 2,
    borderColor: "#33b3a6",
    borderRadius: 10,
  },
  logoutButtonContent: {
    backgroundColor: "#33b3a6",
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 6,
  },
  logoutText: {
    fontSize: 18,
    fontFamily: "PoppinsMedium500",
    color: "#FFFFFF",
  },
});
