import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";

const SubjectInfo = ({ data, handleClose }) => {
  console.log(data);
  return (
    <View style={styles.SubjectInfo}>
      <LinearGradient
        colors={[data.color.Primary, data.color.Secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.AttendanceCard}
      >
        <Text>SubjectInfo</Text>
        <TouchableOpacity
          style={{
            ...styles.subjectInfoClose,
            backgroundColor: data.color.SliderSecondary,
          }}
          onPress={handleClose}
        >
          <Text
            style={{
              fontSize: 20,
              color: data.color.SliderPrimary,
              fontFamily: "Pacifico_400Regular",
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SubjectInfo;
