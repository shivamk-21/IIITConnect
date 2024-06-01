import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Theme";
import DateCard from "./DateCard";

const Calendar = ({ data }) => {
  const [visibleDates, setVisibleDates] = useState([]);
  const [allDatesMap, setAllDatesMap] = useState(new Map());

  useEffect(() => {
    const tempDatesMap = new Map();

    const today = new Date().toLocaleDateString();
    if (
      !data.subjectData.absentDates.includes(today) &&
      !data.subjectData.presentDates.includes(today)
    ) {
      tempDatesMap.set(today, {
        date: today,
        absentCount: 0,
        presentCount: 0,
      });
    }

    // Iterate over absent dates
    data.subjectData.absentDates.forEach((date) => {
      if (!tempDatesMap.has(date)) {
        tempDatesMap.set(date, {
          date,
          absentCount: 0,
          presentCount: 0,
        });
      }
      tempDatesMap.get(date).absentCount++;
    });

    // Iterate over present dates
    data.subjectData.presentDates.forEach((date) => {
      if (!tempDatesMap.has(date)) {
        tempDatesMap.set(date, {
          date,
          absentCount: 0,
          presentCount: 0,
        });
      }
      tempDatesMap.get(date).presentCount++;
    });

    // Check if today's date is in the map

    setAllDatesMap(tempDatesMap);

    const visibleDatesArray = Array.from(tempDatesMap.values()).slice(-10);
    setVisibleDates(visibleDatesArray);
  }, [data]);

  const handleLeft = () => {
    const currentFirstDate = visibleDates[0].date;
    const currentIndex = Array.from(allDatesMap.keys()).indexOf(
      currentFirstDate
    );
    const newStartIndex = Math.max(currentIndex - 10, 0);
    const newVisibleDates = Array.from(allDatesMap.values()).slice(
      newStartIndex,
      newStartIndex + 10
    );
    setVisibleDates(newVisibleDates);
  };

  const handleRight = () => {
    const currentLastDate = visibleDates[visibleDates.length - 1].date;
    const currentIndex = Array.from(allDatesMap.keys()).indexOf(
      currentLastDate
    );
    const newStartIndex = Math.min(
      currentIndex + 10,
      Array.from(allDatesMap.keys()).length - 10
    );
    const newVisibleDates = Array.from(allDatesMap.values()).slice(
      newStartIndex,
      newStartIndex + 10
    );
    setVisibleDates(newVisibleDates);
  };

  return (
    <View style={styles.calendar}>
      <View style={styles.calendarFormat}>
        {visibleDates.map((dateObj, index) => (
          <DateCard
            data={{
              dateT: dateObj.date,
              absentCount: dateObj.absentCount,
              presentCount: dateObj.presentCount,
            }}
            key={index}
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          ...styles.CalendarArrow,
          backgroundColor: data.color.SliderSecondary,
          left: "2.5%",
        }}
        onPress={handleLeft}
      >
        <Text style={styles.CalendarText}>&lt;</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.CalendarArrow,
          backgroundColor: data.color.SliderSecondary,
          right: "2.5%",
        }}
        onPress={handleRight}
      >
        <Text style={styles.CalendarText}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calendar;
