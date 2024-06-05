import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useConText } from "../../context/Context";
import logo from "../../assets/icon.png";
import google from "../../assets/svgs/login.png";
import styles from "./styles/Theme";
const AccountsPage = () => {
  const { setLogStatus } = useConText();

  const hangleLogin = () => {
    setLogStatus(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.logoText}>IIIT Connect</Text>
      <Text style={styles.desc}>
        IIIT Connect is a comprehensive platform designed to facilitate
        communication and collaboration among the students. It aims to
        streamline academic processes, provide easy access to resources, and
        foster a sense of community within the institution.
      </Text>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={hangleLogin}>
          <Image source={google} style={styles.google} />
        </TouchableOpacity>
        <Text style={styles.loginText}>Login With College Google Account</Text>
      </View>
    </View>
  );
};

export default AccountsPage;
