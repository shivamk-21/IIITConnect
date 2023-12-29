import { View } from "react-native";
import React from "react";
import UserStatCard from "../HomePage/components/UserStatCard";
import UserCard from "./components/UserCard";
import Offline from "./components/Offline";
import Logout from "./components/Logout";
import Close from "./components/Close";
import styles from "./styles/Theme";
const AccountsPage = ({close}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      <UserCard />
      <View style={styles.userStatCard}>
        <UserStatCard />
      </View>
      <Offline />
      <Logout/>
      <Close close={close}/>
    </View>
  );
};

export default AccountsPage;
