import React, { useState } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const DeleteModal = ({ close, data }) => {
  const [date, setDates] = useState([]);

  const { deleteDates } = useConText();

  const formattedDates = [
    ...data.absentDates.map((date, index) => ({
      label: `${index + 1}. Absent Date: ${date}`,
      value: `${index + 1}. Absent Date: ${date}`,
    })),
    ...data.presentDates.map((date, index) => ({
      label: `${index + 1}. Present Date: ${date}`,
      value: `${index + 1}. Present Date: ${date}`,
    })),
  ];

  const handlePress = () => {
    if (date.length === 0) {
      Alert.alert("Please select dates");
      return;
    }
    deleteDates(data.name, date);
    close();
  };

  return (
    <View>
      <MultiSelect
        data={formattedDates}
        labelField="label"
        valueField="value"
        placeholder="Multi-Select Dates"
        value={date}
        onChange={(item) => {
          setDates(item);
        }}
        placeholderStyle={styles.placeholderStyle}
        style={{ ...styles.selectStatus, top: -70, left: "-30%", height: 200 }}
        maxHeight={500}
        containerStyle={styles.selectStatusContainer}
        itemTextStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        visibleSelectedItem={false}
      />
      <TouchableOpacity
        style={{ ...styles.selectStatus, top: 170, left: "-30%" }}
        onPress={handlePress}
      >
        <Text style={{ ...styles.modalText, textAlign: "center" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteModal;
