import { TouchableOpacity, View, Image } from "react-native";
import React, { useState,useEffect } from "react";
import PopUp from "./components/PopUp";
import SubjectList from "./components/SubjectList";
import styles from "./styles/Theme";
import { useConText } from "../../context/Context";

const AttendancePage = () => {
  const [isAddSubjectVisible, setIsAddSubjectVisible] = useState(false);

  const { toggleTabBar, tabBarVisible } = useConText();
  const handleAddSubject = (s) => {
    setIsAddSubjectVisible(!isAddSubjectVisible);
    toggleTabBar(s);
  };

  useEffect(() => {
    if (tabBarVisible) {
      setIsAddSubjectVisible(false);
    }
  }, [tabBarVisible]);

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      {isAddSubjectVisible && <PopUp close={() => handleAddSubject(true)} />}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleAddSubject(false)}
      >
        <Image
          source={require("../../assets/svgs/Add.png")}
          style={styles.addButton}
        />
      </TouchableOpacity>
      <SubjectList />
    </View>
  );
};

export default AttendancePage;
