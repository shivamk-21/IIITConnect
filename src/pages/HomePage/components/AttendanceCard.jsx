import { View, Text, Image, useColorScheme } from "react-native";
import React from "react";
import styles from "../styles/GlobalLight";
import { LinearGradient } from "expo-linear-gradient";
import { useConText } from "../../../context/Context";
const AttendanceCard = () => {
  const { subject } = useConText();
  let totalPresent = 0;
  let totalAbsent = 0;
  subject.forEach((s) => {
    totalPresent += s.present || 0;
    totalAbsent += s.absent || 0;
  });
  const total = totalPresent + totalAbsent;
  const overallPercentage = total
    ? ((totalPresent / total) * 100).toFixed(2)
    : 0;

  return (
    <LinearGradient
      colors={["#E88CFF", "#CC00FF"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.paperCard}
    >
      <Text style={styles.paperCardText}>Attendance</Text>
      <Text style={styles.attendanceCardText2}>{overallPercentage}%</Text>
      <View style={styles.attendanceCardBarBase}></View>
      <View
        style={{ ...styles.attendanceCardBar, width: `${overallPercentage}%` }}
      ></View>
    </LinearGradient>
  );
};

export default AttendanceCard;
