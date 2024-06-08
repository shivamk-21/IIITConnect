import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "./Slider";
const PaperCard = () => {
  return (
    <View style={styles.offlineCardBase}>
      <LinearGradient
        colors={["#FFB978", "#FF7A00"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.offlineCard}
      >
        <Text style={styles.offlineCardText}>Good Luck</Text>
        <Slider />
      </LinearGradient>
    </View>
  );
};

export default PaperCard;
