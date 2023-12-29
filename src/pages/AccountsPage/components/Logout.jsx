import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";

const Logout = () => {
  return (
    <View style={styles.logoutCardBase}>
      <LinearGradient
        colors={["#FF7878", "#FF0000"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.offlineCard}
      >
        <Text
          style={{ ...styles.offlineCardText, textAlign: "center", left: "0%" }}
        >
          Logout
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Logout;
