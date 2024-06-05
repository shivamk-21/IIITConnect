import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { useConText } from "../../../context/Context";

const Logout = () => {
  const { setLogStatus } = useConText();

  const hangleLogout = () => {
    setLogStatus(false);
  };
  return (
      <TouchableOpacity style={styles.logoutCardBase} onPress={hangleLogout}>
        <LinearGradient
          colors={["#FF7878", "#FF0000"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.offlineCard}
        >
          <Text
            style={{
              ...styles.offlineCardText,
              textAlign: "center",
              left: "0%",
            }}
          >
            Logout
          </Text>
        </LinearGradient>
      </TouchableOpacity>
  );
};

export default Logout;
