import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/GlobalLight";
import { LinearGradient } from "expo-linear-gradient";
const AttendanceCard = () => {
  return (
    <LinearGradient
      colors={["#E88CFF", "#CC00FF"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.paperCard}
    >
      <Text style={styles.paperCardText}>Attendance</Text>
      <Text style={styles.attendanceCardText2}>70%</Text>
      <View style={styles.attendanceCardBarBase}></View>
      <View style={{ ...styles.attendanceCardBar, width: "70%" }}></View>
    </LinearGradient>
  );
};

export default AttendanceCard;
