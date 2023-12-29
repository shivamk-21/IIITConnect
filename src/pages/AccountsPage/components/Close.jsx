import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";

const Logout = ({ close }) => {
  return (
    <TouchableOpacity style={styles.closeCardBase} onPress={close}>
      <LinearGradient
        colors={["#414B51", "#1F2B32"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.offlineCard}
      >
        <Text
          style={{
            ...styles.offlineCardText,
            textAlign: "center",
            left: "0%",
            lineHeight: 50,
          }}
        >
          CLose
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Logout;
