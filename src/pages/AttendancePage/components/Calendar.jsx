import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Theme";
import DateCard from "./DateCard";

const Calendar = ({ data }) => {
  const [visibleDates, setVisibleDates] = useState([]);
  const [allDatesMap, setAllDatesMap] = useState(new Map());

  useEffect(() => {
    const tempDatesMap = new Map();

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

    // Sort dates by ascending order of date
    const sortedDates = Array.from(tempDatesMap.values()).sort((a, b) => new Date(a.date) - new Date(b.date));

    setAllDatesMap(sortedDates.reduce((map, obj) => {
      map.set(obj.date, obj);
      return map;
    }, new Map()));

    const visibleDatesArray = sortedDates.slice(-10);
    setVisibleDates(visibleDatesArray);
  }, [data]);

  const handleLeft = () => {
    if (visibleDates.length === 0) return;
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
    if (visibleDates.length === 0) return;
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
              subject: data.subjectData.name,
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
