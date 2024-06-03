import React, {  useState } from "react";
import {  Text, View, TouchableOpacity, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const AddModal = ({ close, data }) => {
    const [action, setAction] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [count, setCount] = useState("");
  
    const { addAbsentDate, addPresentDate } = useConText();
  
    const actions = [
      { label: "Present", value: "Present" },
      { label: "Absent", value: "Absent" },
    ];
  
    const days = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "10", value: "10" },
      { label: "11", value: "11" },
      { label: "12", value: "12" },
      { label: "13", value: "13" },
      { label: "14", value: "14" },
      { label: "15", value: "15" },
      { label: "16", value: "16" },
      { label: "17", value: "17" },
      { label: "18", value: "18" },
      { label: "19", value: "19" },
      { label: "20", value: "20" },
      { label: "21", value: "21" },
      { label: "22", value: "22" },
      { label: "23", value: "23" },
      { label: "24", value: "24" },
      { label: "25", value: "25" },
      { label: "26", value: "26" },
      { label: "27", value: "27" },
      { label: "28", value: "28" },
      { label: "29", value: "29" },
      { label: "30", value: "30" },
      { label: "31", value: "31" },
    ];
  
    const months = [
      { label: "January", value: "01" },
      { label: "February", value: "02" },
      { label: "March", value: "03" },
      { label: "April", value: "04" },
      { label: "May", value: "05" },
      { label: "June", value: "06" },
      { label: "July", value: "07" },
      { label: "August", value: "08" },
      { label: "September", value: "09" },
      { label: "October", value: "10" },
      { label: "November", value: "11" },
      { label: "December", value: "12" },
    ];
  
    const counts = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ];
  
    const handlePress = () => {
      if (!action || !day || !month || !count) {
        Alert.alert("Please fill all fields");
        return;
      }
      if (action === "Present") {
        addPresentDate(data, `${day}/${month}/2024`, count);
      } else {
        addAbsentDate(data, `${day}/${month}/2024`, count);
      }
      close();
    };
  
    return (
      <View>
        <Dropdown
          data={actions}
          placeholder="Ab/Pr"
          value={action}
          onChange={(item) => {
            setAction(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{ ...styles.selectStatus, top: -70, left: "-30%" }}
          maxHeight={500}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
        />
        <Dropdown
          data={days}
          placeholder="Day"
          value={day}
          onChange={(item) => {
            setDay(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{ ...styles.selectStatus, top: 10, left: "-30%", width: "20%" }}
          maxHeight={200}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
        />
        <Dropdown
          data={months}
          placeholder="Month"
          value={month}
          onChange={(item) => {
            setMonth(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{ ...styles.selectStatus, top: 10, left: "-7%", width: "37%" }}
          maxHeight={200}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
        />
        <Dropdown
          data={counts}
          placeholder="Count"
          value={count}
          onChange={(item) => {
            setCount(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{ ...styles.selectStatus, top: 90, left: "-30%" }}
          maxHeight={200}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
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

export default AddModal;