import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const DateCard = ({ data }) => {
  const { dateT, absentCount, presentCount, subject } = data;
  const [addButtonTextColor, setAddButtonTextColor] = useState("grey");
  const [removeButtonTextColor, setRemoveButtonTextColor] = useState("grey");
  const { addAbsentDate, addPresentDate } = useConText();

  useEffect(() => {
    setAddButtonTextColor(presentCount > 0 ? "green" : "grey");
    setRemoveButtonTextColor(absentCount > 0 ? "red" : "grey");
  }, [absentCount, presentCount]);

  const formattedDate = new Date(dateT.split("/").reverse().join("-"))
    .toLocaleString("en-US", { day: "2-digit", month: "short" })
    .replace(",", "");

  return (
    <View style={styles.dateCard}>
      <Text style={{ ...styles.dateCardText, color: removeButtonTextColor }}>
        - {absentCount}
      </Text>
      <Text style={styles.dateCardDate}>{formattedDate}</Text>
      <Text style={{ ...styles.dateCardText, color: addButtonTextColor }}>
        + {presentCount}
      </Text>
    </View>
  );
};

export default DateCard;
