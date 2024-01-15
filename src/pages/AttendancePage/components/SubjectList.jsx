import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Theme";
import SubjectCard from "../components/SubjectCard";
import SubjectInfo from "../components/SubjectInfo";
import { useConText } from "../../../context/Context";
import { PreventRemoveProvider } from "@react-navigation/core";

const SubjectList = () => {
  const { subject, toggleTabBar, removeSubject } = useConText();
  const [popupShown, setPopupShown] = useState(false);
  const [popUpData, setPopUpData] = useState({});
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
  const handlePopUp = async (data, c) => {
    setPopUpData({ subjectData: data, color: c });
    toggleTabBar();
    setPopupShown(!popupShown);
  };
  const handlePopUpClose = () => {
    setPopupShown(!popupShown);
    toggleTabBar();
  };
  const handleRemove = (name) => {
    removeSubject(name);
    setPopupShown(!popupShown);
  };
  return (
    <>
      <View style={styles.SubjectList}>
        <ScrollView>
          {subject.map((subjectItem, index) => {
            return (
              <SubjectCard
                key={index}
                subjectData={subjectItem}
                colorData={colours[index % 4]}
                handlePopUp={() => handlePopUp(subjectItem, colours[index % 4])}
              />
            );
          })}
          <View style={{ width: "100%", height: 150 }} />
        </ScrollView>
      </View>
      {popupShown && (
        <SubjectInfo
          data={popUpData}
          handleClose={handlePopUpClose}
          handleremove={handleRemove}
        />
      )}
    </>
  );
};

export default SubjectList;
