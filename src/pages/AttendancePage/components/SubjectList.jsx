import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Theme";
import SubjectCard from "../components/SubjectCard";
import SubjectInfo from "../components/SubjectInfo";
import { useConText } from "../../../context/Context";

const SubjectList = () => {
  const { subject, toggleTabBar } = useConText();
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
  const handlePopUp = (name, c) => {
    const s = subject.find((item) => item.name === name);
    setPopUpData({ subjectData: s, color: c });
    toggleTabBar();
    setPopupShown(!popupShown);
  };
  const handlePopUpClose = () => {
    setPopupShown(!popupShown);
    toggleTabBar();
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
        <SubjectInfo data={popUpData} handleClose={handlePopUpClose} />
      )}
    </>
  );
};

export default SubjectList;
