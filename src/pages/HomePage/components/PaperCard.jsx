import { Text } from "react-native";
import React from "react";
import styles from "../styles/GlobalLight";
import { LinearGradient } from "expo-linear-gradient";

const PaperCard = ({count}) => {
  return (
    <LinearGradient
      colors={["#FFB978", "#FF7A00"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.paperCard}
    >
      <Text style={styles.paperCardText}>Paper Accessed</Text>
      <Text style={styles.paperCardText2}>{count}</Text>
    </LinearGradient>
  );
};

export default PaperCard;
