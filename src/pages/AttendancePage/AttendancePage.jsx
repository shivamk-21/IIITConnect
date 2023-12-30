import { TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import PopUp from "./components/PopUp";
import SubjectList from "./components/SubjectList";
import styles from "./styles/Theme";
import { useConText } from "../../context/Context";

const AttendancePage = () => {
  const [isAddSubjectVisible, setIsAddSubjectVisible] = useState(false);
  const { toggleTabBar } = useConText();
  const handleAddSubject = () => {
    setIsAddSubjectVisible(!isAddSubjectVisible);
    toggleTabBar();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      {isAddSubjectVisible && <PopUp close={handleAddSubject} />}
      <TouchableOpacity style={styles.Button} onPress={handleAddSubject}>
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
