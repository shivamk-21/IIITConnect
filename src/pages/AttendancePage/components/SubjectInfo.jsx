import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions,
  Alert,
  Animated,
  Modal,
} from "react-native";
import styles from "../styles/Theme";
import { LinearGradient } from "expo-linear-gradient";
import Calendar from "./Calendar";
import EditModal from "./EditModal";

const SubjectInfo = ({ data, handleClose, handleremove }) => {
  const expAb = Math.round(
    ((data.subjectData.credits * 14) / 4) - data.subjectData.absent
  );

  const percentage = Math.round(
    (data.subjectData.present /
      (data.subjectData.absent + data.subjectData.present)) *
      100
  );

  const [fontSize, setFontSize] = useState(25);
  const slideAnim = useState(new Animated.Value(Dimensions.get("window").height))[0]; // Initial position off the screen
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, []);

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

  const confirmRemove = () => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to remove ${data.subjectData.name}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Remove", onPress: () => handleremove(data.subjectData.name) },
      ],
      { cancelable: false }
    );
  };

  const handleModalClose = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get("window").height,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      handleClose();
    });
  };

  return (
    <Animated.View style={[styles.SubjectInfo, { transform: [{ translateY: slideAnim }] }]}>
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
          <Text style={styles.text}>/</Text>
          <Text style={styles.text}>Absent : {data.subjectData.absent}</Text>
          <Text style={styles.text}>/</Text>
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
        <Calendar data={data} />

        <TouchableOpacity
          style={{
            ...styles.subjectInfoClose,
            backgroundColor: data.color.SliderSecondary,
            left: "2.5%",
          }}
          onPress={confirmRemove}
        >
          <Text
            style={{
              fontSize: 20,
              color: data.color.SliderPrimary,
              fontFamily: "Pacifico_400Regular",
            }}
          >
            Remove Subject
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.subjectInfoClose,
            backgroundColor: data.color.SliderSecondary,
            right: "2.5%",
          }}
          onPress={handleModalClose}
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
        <TouchableOpacity
          style={{
            ...styles.editModal,
            backgroundColor: data.color.SliderSecondary,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              fontSize: 25,
              color: data.color.SliderPrimary,
            }}
          >
            &#x270D;
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <EditModal data={data} closeModal={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </Animated.View>
  );
};

export default SubjectInfo;
