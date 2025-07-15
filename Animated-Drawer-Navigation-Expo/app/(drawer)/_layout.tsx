import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from "@/components/custom-drawer-content";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#33b3a6",
          drawerInactiveBackgroundColor: "transparent",
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: "#FFFFFF",
          overlayColor: "transparent",
          drawerStyle: {
            backgroundColor: "transparent",
            width: "60%",
            paddingTop: 40,
          },
          drawerLabelStyle: {
            marginLeft: -6,
            fontSize: 18,
            fontFamily: "PoppinsMedium500",
            color: "#FFFFFF",
          },
          drawerItemStyle: {
            marginLeft: -16,
            marginRight: 35,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          },
          sceneStyle: {
            backgroundColor: "#26867C",
          },
          // drawerType: 'front',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) =>
              <Ionicons
                name="home"
                size={size ?? 24}
                color={color ?? "#fff"}
              />,
          }}
        />
        <Drawer.Screen
          name="notification"
          options={{
            title: "Notifications",
            drawerIcon: ({ color, size }) =>
              <Ionicons
                name="notifications"
                size={size ?? 24}
                color={color ?? "#fff"}
              />,
          }}
        />
        <Drawer.Screen
          name="calendar"
          options={{
            title: "Calendar",
            drawerIcon: ({ color, size }) =>
              <Ionicons
                name="calendar"
                size={size ?? 24}
                color={color ?? "#fff"}
              />,
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            title: "Help",
            drawerIcon: ({ color, size }) =>
              <Ionicons
                name="help-circle"
                size={size ?? 24}
                color={color ?? "#fff"}
              />,
          }}
        />
        <Drawer.Screen
          name="setting"
          options={{
            title: "Settings",
            drawerIcon: ({ color, size }) =>
              <Ionicons
                name="settings-sharp"
                size={size ?? 24}
                color={color ?? "#fff"}
              />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
