import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/Theme";
import { Dropdown } from "react-native-element-dropdown";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

const PopUp = ({ handleClose }) => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  const [paper, setPaper] = useState(null);
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const papers = [
    { label: "MT", value: "MT" },
    { label: "ET", value: "ET" },
    { label: "QZ", value: "QZ" },
    { label: "PT", value: "PT" },
  ];
  const semesters = [
    { label: "Spring", value: "Spring" },
    { label: "Autumn", value: "Autumn" },
  ];
  const sessions = [
    { label: "2021-22", value: "2021-22" },
    { label: "2022-23", value: "2022-23" },
    { label: "2023-24", value: "2023-24" },
  ];

  const handleButtonPress = async () => {
    if (
      !subjectName ||
      !subjectCode ||
      !paper ||
      !semester ||
      !session ||
      !file
    ) {
      Alert.alert(
        "Missing Inputs",
        "Please fill all fields and select a file."
      );
      return;
    }

    const formData = new FormData();
    formData.append("subjectName", subjectName);
    formData.append("subjectCode", subjectCode);
    formData.append("paper", paper);
    formData.append("semester", semester);
    formData.append("session", session);
    formData.append("file", {
      uri: file.assets[0].uri,
      type: file.assets[0].mimeType,
      name: file.assets[0].name,
    });

    setLoading(true);
    try {
      const response = await axios.post(
        "https://iiit-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", response.data.response);
        handleClose();
      } else {
        Alert.alert("Error", response.data.error || "Error uploading file");
      }
    } catch (error) {
      Alert.alert("Error", "Error uploading file");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "application/pdf"],
    });
    if (result.canceled === false) {
      setFile(result);
      alert("File selection was selected");
    } else {
      alert("File selection was canceled");
    }
  };
  return (
    <View style={styles.PopUp}>
      <TextInput
        style={styles.AddInput}
        placeholder="Subject Name"
        placeholderTextColor="#8C99A0"
        value={subjectName}
        onChangeText={setSubjectName}
      />
      <TouchableOpacity style={styles.close} onPress={handleClose}>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: Dimensions.get("window").width * 0.04,
            color: "#8C99A0",
          }}
        >
          X
        </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.AddInput2}
        placeholder="Subject Code"
        placeholderTextColor="#8C99A0"
        value={subjectCode}
        onChangeText={setSubjectCode}
      />
      <Dropdown
        data={papers}
        placeholder="Select Paper"
        onChange={(item) => {
          setPaper(item.value);
        }}
        placeholderStyle={styles.placeholderStyle}
        labelField="label"
        valueField="value"
        style={styles.selectPaper}
        maxHeight={180}
        containerStyle={styles.selectPaperContainer}
        itemTextStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
      />
      <Dropdown
        data={sessions}
        placeholder="Select Session"
        onChange={(item) => {
          setSession(item.value);
        }}
        placeholderStyle={styles.placeholderStyle}
        labelField="label"
        valueField="value"
        style={{ ...styles.selectPaper, top: 153, left: "5%" }}
        maxHeight={110}
        containerStyle={styles.selectPaperContainer}
        itemTextStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
      />
      <Dropdown
        data={semesters}
        placeholder="Select Semester"
        onChange={(item) => {
          setSemester(item.value);
        }}
        placeholderStyle={styles.placeholderStyle}
        labelField="label"
        valueField="value"
        style={{ ...styles.selectPaper, top: 153, right: "5%" }}
        maxHeight={110}
        containerStyle={styles.selectPaperContainer}
        itemTextStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
      />
      <TouchableOpacity
        style={{ ...styles.Cancel, left: "5%", bottom: "19.5%", width: "90%" }}
        onPress={handleFileSelect}
      >
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: Dimensions.get("window").width * 0.04,
            color: "#8C99A0",
          }}
        >
          Upload File
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.Cancel, left: "5%" }}
        onPress={handleClose}
      >
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: Dimensions.get("window").width * 0.04,
            color: "#8C99A0",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.Cancel, right: "5%" }}
        onPress={handleButtonPress}
      >
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: Dimensions.get("window").width * 0.04,
            color: "#8C99A0",
          }}
        >
          Contribute
        </Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default PopUp;
