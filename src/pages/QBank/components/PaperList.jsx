import {  View, ScrollView } from "react-native";
import React from "react";
import styles from "../styles/Theme";
import PaperCard from "../components/PaperCard";

const PaperList = ({ data }) => {
  const colours = [
    {
      Primary: "#9007FB",
      Secondary: "#D0B4FF",
      SliderPrimary: "#840AE4",
      SliderSecondary: "#E7CAFF",
    },
    {
      Primary: "#FF7A00",
      Secondary: "#FFB978",
      SliderPrimary: "#E87105",
      SliderSecondary: "#FFE5CE",
    },
    {
      Primary: "#FF1717",
      Secondary: "#FFA8A8",
      SliderPrimary: "#B40F0F",
      SliderSecondary: "#FFC2C2",
    },
    {
      Primary: "#0057FF",
      Secondary: "#81ACFF",
      SliderPrimary: "#0740B0",
      SliderSecondary: "#CDD9EF",
    },
  ];

  return (
    <>
      <View style={styles.PaperList}>
        <ScrollView>
          {data.map((Item, index) => {
            return (
              <PaperCard
                key={index}
                data={Item}
                colorData={colours[index % 4]}
              />
            );
          })}
          <View style={{ width: "100%", height: 150 }} />
        </ScrollView>
      </View>
    </>
  );
};

export default PaperList;
