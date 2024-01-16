import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";

const SubjectInfo = ({ data, handleClose, handleremove }) => {
  const expAb = Math.round(
    (data.subjectData.credits * 7) / 4 - data.subjectData.absent
  );

  const percentage = Math.round(
    (data.subjectData.present /
      (data.subjectData.absent + data.subjectData.present)) *
      100
  );

  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    const { width: containerWidth } = Dimensions.get("window");
    const maxWidth = 0.7 * containerWidth;
    let currentFontSize = 30;
    let textWidth = currentFontSize * data.subjectData.name.length * 0.6;
    while (textWidth > maxWidth) {
      currentFontSize -= 1;
      textWidth = currentFontSize * data.subjectData.name.length * 0.6;
    }
    setFontSize(currentFontSize);
  }, []);
  
  return (
    <View style={styles.SubjectInfo}>
      <LinearGradient
        colors={[data.color.Primary, data.color.Secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.AttendanceCard}
      >
        <Text style={{ ...styles.subjectName, fontSize: fontSize }}>
          {data.subjectData.name}
        </Text>
        <Text style={styles.attendance}>{percentage}%</Text>
        <View style={styles.hr} />
        <View style={styles.infoSubbar}>
          <Text style={styles.text}>Present : {data.subjectData.present}</Text>
          <Text style={styles.text}>Absent : {data.subjectData.absent}</Text>
          <Text style={styles.text}>Credits : {data.subjectData.credits}</Text>
        </View>
        <Text style={styles.exPtext}>Expected Absents Left : {expAb}</Text>
        <View style={styles.SliderView}>
          <View
            style={{
              ...styles.attendanceBar,
              backgroundColor: data.color.SliderPrimary,
            }}
          />
          <View
            style={{
              ...styles.attendanceBarSub,
              backgroundColor: data.color.SliderSecondary,
              width: `${percentage}%`,
            }}
          />
        </View>
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
