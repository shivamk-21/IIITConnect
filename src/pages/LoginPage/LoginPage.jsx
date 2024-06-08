import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useConText } from "../../context/Context";
import logo from "../../assets/icon.png";
import google from "../../assets/svgs/login.png";
import styles from "./styles/Theme";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import ENV_VAR from "../../../Var";

const AccountsPage = () => {
  const { setUserInfoData } = useConText();

  GoogleSignin.configure({
    webClientId: ENV_VAR.CLIENT_ID_WEB,
    androidClientId: ENV_VAR.CLIENT_ID,
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      const status = setUserInfoData(res.user);
      if (status === "wrong_email") {
        Alert.alert("Please use your college email id to login");
        signOut();
      }
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert("Process Cancelled");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert("Play Services Not Available");
          break;
      }
    }
  };

  const signOut = async () => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  const hangleLogin = () => {
    signIn();
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
