import {
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/Theme";

// Import all the images statically
import otherLogo from "../../../assets/svgs/other.png";
import hostelLogo from "../../../assets/svgs/hostel.png";
import maintenanceLogo from "../../../assets/svgs/maintenance.png";
import officeLogo from "../../../assets/svgs/office.png";
import professorLogo from "../../../assets/svgs/professor.png";
import studentLogo from "../../../assets/svgs/student.png";

const logoMap = {
  Hostel: hostelLogo,
  Maintenance: maintenanceLogo,
  Office: officeLogo,
  Professor: professorLogo,
  Student: studentLogo,
  Other: otherLogo,
};

const ContactCard = ({ data }) => {
  const [fontSize, setFontSize] = useState(16);
  const [logo, setLogo] = useState(otherLogo);

  useEffect(() => {
    const logoSource = logoMap[data[1]] || logoMap.Other;
    setLogo(logoSource);

    const { width: containerWidth } = Dimensions.get("window");
    const maxWidth = 0.5 * containerWidth;

    let currentFontSize = 20;
    let textWidth = currentFontSize * data[0].length * 0.6;

    while (textWidth > maxWidth) {
      currentFontSize -= 1;
      textWidth = currentFontSize * data[0].length * 0.6;
    }

    setFontSize(currentFontSize);
  }, [data]);

  const handlePress = () => {
    Linking.openURL("tel:+91" + data[3]);
  };

  return (
    <TouchableOpacity style={styles.ContactCardBase} onPress={handlePress}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={{ ...styles.ContactCardName, fontSize }}>{data[0]}</Text>
        <Text style={styles.ContactCardDepartment}>{data[2]}</Text>
        <Text style={styles.ContactCardNumber}>+91 {data[3]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
