import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./src/pages/HomePage/HomePage";
import AccountsPage from "./src/pages/AccountsPage/AccountsPage";
import { useConText } from "./src/context/Context";
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { tabBarVisible } = useConText();
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      backgroundColor: "#414B51",
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
      paddingBottom: "1%",
      paddingLeft: "3%",
      paddingRight: "3%",
      paddingTop: "1%",
      borderTopWidth: 0,
      height: "8%",
      bottom: tabBarVisible ? 0 : "-8%",
    },
    tabBarLabelStyle: {
      color: "#ffffff",
      fontFamily: "Caveat_700Bold",
      fontSize: 12,
    },
    tabBarItemStyle: {
      borderRadius: 16,
      margin: 5,
      textAlign: "center",
    },
    tabBarActiveTintColor: "#7700D4",
    tabBarActiveBackgroundColor: "#1F2B32",
    tabBarIcon: ({ focused }) => {
      const icons = {
        Home: focused
          ? require("./src/assets/svgs/home-active.png")
          : require("./src/assets/svgs/home-inactive.png"),
        Attendance: focused
          ? require("./src/assets/svgs/attendance-active.png")
          : require("./src/assets/svgs/attendance-inactive.png"),
        QBank: focused
          ? require("./src/assets/svgs/qbank-active.png")
          : require("./src/assets/svgs/qbank-inactive.png"),
        Directory: focused
          ? require("./src/assets/svgs/directory-active.png")
          : require("./src/assets/svgs/directory-inactive.png"),
      };

      return (
        <Image source={icons[route.name]} style={{ width: 26, height: 24 }} />
      );
    },
  });
  return (
    <NavigationContainer style={{ backgroundColor: "#1F2B32" }}>
      <Tab.Navigator
        screenOptions={screenOptions}
        style={{ flex: 1, backgroundColor: "#1F2B32" }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Attendance" component={AccountsPage} />
        <Tab.Screen name="QBank" component={AccountsPage} />
        <Tab.Screen name="Directory" component={AccountsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
