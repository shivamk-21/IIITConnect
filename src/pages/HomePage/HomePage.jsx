import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import User from "./components/User";
import UserStatCard from "./components/UserStatCard";
import AttendanceCard from "./components/AttendanceCard";
import PaperCard from "./components/PaperCard";
import QuoteCard from "./components/QuoteCard";
import AccountsPage from "../AccountsPage/AccountsPage";
import styles from "./styles/GlobalLight";
import { useConText } from "../../context/Context";

const MainPage = () => {
  const navigation = useNavigation();
  const [showAccountsPage, setShowAccountsPage] = useState(false);
  const { toggleTabBar } = useConText();

  const handleAttendancePress = () => {
    navigation.navigate("Attendance"); 
  };

  const handlePaperPress = () => {
    navigation.navigate("QBank"); 
  };

  const handleUserClick = () => {
    setShowAccountsPage(true);
    toggleTabBar();
  };
  const handleClose = () => {
    setShowAccountsPage(false);
    toggleTabBar();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      {!showAccountsPage && (
        <>
          <User onclick={handleUserClick} close={handleClose}/>
          <UserStatCard />
          <TouchableOpacity
            onPress={handleAttendancePress}
            style={styles.attendanceCardBase}
          >
            <AttendanceCard />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePaperPress}
            style={styles.paperCardBase}
          >
            <PaperCard />
          </TouchableOpacity>
          <QuoteCard />
        </>
      )}
      {showAccountsPage && <AccountsPage close={handleClose}/>}
    </View>
  );
};

export default MainPage;
