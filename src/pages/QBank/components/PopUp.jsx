import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions,
  Alert,
  ActivityIndicator,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/Theme";
import { Dropdown } from "react-native-element-dropdown";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import JSZip from "jszip";
import ENV_VAR from "../../../../env";

const PopUp = ({ handleClose }) => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  const [paper, setPaper] = useState("");
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const slideAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleDismiss = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => handleClose());
  };

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
    setLoading(true);
    const formData = new FormData();
    formData.append("subjectName", subjectName);
    formData.append("subjectCode", subjectCode);
    formData.append("paper", paper);
    formData.append("semester", semester);
    formData.append("session", session);
    if (file.length === 1) {
      formData.append("file", {
        uri: file[0].uri,
        type: file[0].mimeType,
        name: file[0].name,
      });
    } else {
      const zip = new JSZip();

      for (const f of file) {
        const fileContent = await FileSystem.readAsStringAsync(f.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        zip.file(f.name, fileContent, { base64: true });
      }

      const zipContent = await zip.generateAsync({ type: "base64" });

      const targetPath = `${FileSystem.cacheDirectory}files.zip`;
      await FileSystem.writeAsStringAsync(targetPath, zipContent, {
        encoding: FileSystem.EncodingType.Base64,
      });

      formData.append("file", {
        uri: targetPath,
        type: "application/zip",
        name: "files.zip",
      });
    }

    try {
      const response = await axios.post(ENV_VAR.Q_UPLOAD, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        Alert.alert("Success", response.data.response);
        handleDismiss();
      } else {
        Alert.alert("Error", response.data.error || "Error uploading file");
      }
    } catch (error) {
      Alert.alert("Error", "Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async () => {
    setLoading(true);
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: ["image/*", "application/pdf"],
        multiple: true,
      });

      if (!result.canceled) {
        setFile(result.assets);
        Alert.alert("File selection was successful");
      } else {
        Alert.alert("File selection was canceled");
      }
    } catch (error) {
      Alert.alert("An error occurred during file selection");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Animated.View
      style={[
        styles.PopUp,
        {
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get("window").height, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TextInput
        style={styles.AddInput}
        placeholder="Subject Name"
        placeholderTextColor="#8C99A0"
        value={subjectName}
        onChangeText={setSubjectName}
      />
      <TouchableOpacity style={styles.close} onPress={handleDismiss}>
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
        value={paper}
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
        value={session}
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
        value={semester}
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
        onPress={handleDismiss}
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
    </Animated.View>
  );
};

export default PopUp;
