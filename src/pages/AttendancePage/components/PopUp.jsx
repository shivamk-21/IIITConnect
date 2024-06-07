import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
  Alert,
  Animated,
} from "react-native";
import styles from "../styles/Theme";
import Slider from "./Slider";
import { useConText } from "../../../context/Context";

const PopUp = ({ close }) => {
  const [credits, setCredits] = useState(0);
  const [subjectName, setSubjectName] = useState("");
  const slideAnim = useState(new Animated.Value(0))[0];

  const { subject, addSubject } = useConText();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleButtonPress = () => {
    const s = subject.find((item) => item.name === subjectName);
    if (!subjectName || !credits) {
      Alert.alert(
        "Wrong Inputs",
        "Please enter valid inputs for Subject name and Credits or Subject "
      );
      return;
    }
    if (s) {
      Alert.alert("Wrong Input", "Subject name Already Exits");
      return;
    }
    addSubject(subjectName, credits);
    setSubjectName("");
    setCredits("");
    close();
  };

  const handleDismiss = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => close());
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
      <Text
        style={{
          ...styles.Credits,
          fontSize: Dimensions.get("window").width * 0.06,
        }}
      >
        Credits : {credits}
      </Text>
      <Slider credits={credits} setCredits={setCredits} />
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
          Add
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PopUp;
