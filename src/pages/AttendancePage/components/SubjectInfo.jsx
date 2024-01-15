import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";

const SubjectInfo = ({ data, handleClose, handleremove }) => {
  return (
    <View style={styles.SubjectInfo}>
      <LinearGradient
        colors={[data.color.Primary, data.color.Secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.AttendanceCard}
      >
        <Text>{data.subjectData.name}</Text>
        <Text>{data.subjectData.present}</Text>
        <Text>{data.subjectData.absent}</Text>
        <Text>
          {(data.subjectData.present /
            (data.subjectData.absent + data.subjectData.present)) *
            100}{" "}
          %
        </Text>
        <Text>{data.subjectData.credits}</Text>
        <Text>
          {Math.round(
            (data.subjectData.credits * 7) / 4 - data.subjectData.absent
          )}
        </Text>
        <TouchableOpacity
          style={{
            ...styles.subjectInfoClose,
            backgroundColor: data.color.SliderSecondary,
            left: "2.5%",
          }}
          onPress={() => handleremove(data.subjectData.name)}
        >
          <Text
            style={{
              fontSize: 20,
              color: data.color.SliderPrimary,
              fontFamily: "Pacifico_400Regular",
            }}
          >
            Remove
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.subjectInfoClose,
            backgroundColor: data.color.SliderSecondary,
            right: "2.5%",
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
