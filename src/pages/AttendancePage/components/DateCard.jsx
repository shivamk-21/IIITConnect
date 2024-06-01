import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Theme";

const DateCard = ({ data }) => {
  const { dateT, absentCount, presentCount } = data;
  const [addButtonTextColor, setAddButtonTextColor] = useState("grey");
  const [removeButtonTextColor, setRemoveButtonTextColor] = useState("grey");

  useEffect(() => {
    setAddButtonTextColor(presentCount > 0 ? "green" : "grey");
    setRemoveButtonTextColor(absentCount > 0 ? "red" : "grey");
  }, [absentCount, presentCount]);

  const formattedDate = new Date(dateT.split("/").reverse().join("-"))
    .toLocaleString("en-US", { day: "2-digit", month: "short" })
    .replace(",", "");

  return (
    <View style={styles.dateCard}>
      <TouchableOpacity style={styles.dateCardButton}>
        <Text style={{ ...styles.dateCardText, color: removeButtonTextColor }}>
          - {absentCount}
        </Text>
      </TouchableOpacity>
      <Text style={styles.dateCardDate}>{formattedDate}</Text>
      <TouchableOpacity style={styles.dateCardButton}>
        <Text style={{ ...styles.dateCardText, color: addButtonTextColor }}>
          + {presentCount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateCard;
