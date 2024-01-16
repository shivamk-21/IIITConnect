import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Button: {
    width: "20%",
    height: "9.5%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: "10%",
    right: "5%",
    zIndex: 1,
    backgroundColor: "#D0B4FF",
  },
  addButton: {
    width: "95%",
    height: "95%",
  },
  PopUp: {
    width: "100%",
    height: "30%",
    backgroundColor: "#414B51",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    minHeight: 250,
  },
  AddInput: {
    width: "70%",
    height: "25%",
    backgroundColor: "#414B51",
    borderRadius: 50,
    position: "absolute",
    top: "10%",
    left: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    fontFamily: "Pacifico_400Regular",
    fontSize: 20,
    paddingLeft: "7%",
    color: "#8C99A0",
  },
  close: {
    width: "17%",
    height: "25%",
    backgroundColor: "#414B51",
    borderRadius: 30,
    position: "absolute",
    top: "10%",
    right: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  Credits: {
    fontFamily: "Pacifico_400Regular",
    color: "#8C99A0",
    top: "35%",
    left: "5%",
  },
  Cancel: {
    width: "40%",
    height: "25%",
    backgroundColor: "#414B51",
    borderRadius: 30,
    position: "absolute",
    bottom: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "95%",
    zIndex: 2,
  },
  SliderFake: {
    width: "90%",
    height: "10%",
    backgroundColor: "#2C3236",
    position: "absolute",
    top: "45%",
    left: "5%",
    borderRadius: 50,
  },
  SliderFakeInner: {
    height: "100%",
    backgroundColor: "#8C99A0",
    position: "absolute",
    top: "0%",
    left: "0%",
    borderRadius: 100,
    zIndex: 1,
    width: "10%",
  },
  SubjectList: {
    height: "92%",
    width: "100%",
    paddingTop: "3%",
  },
  AttendanceCardBase: {
    width: "95%",
    height: 150,
    left: "2.5%",
  },
  AttendanceCard: {
    width: "100%",
    height: "90%",
    borderRadius: 30,
    padding: "5%",
  },
  subjectCardName: {
    fontFamily: "Pacifico_400Regular",
    color: "#ffffff",
    position: "absolute",
    left: "5%",
    top: "15%",
    lineHeight: 50,
  },
  subjectCardPercent: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#ffffff",
    position: "absolute",
    right: "5%",
    top: "15%",
    fontSize: 30,
  },
  subjectCardBarBase: {
    width: "100%",
    height: "20%",
    position: "absolute",
    top: "95%",
    left: "5%",
    borderRadius: 20,
  },
  subjectCardBar: {
    height: "20%",
    position: "absolute",
    top: "95%",
    left: "5%",
    borderRadius: 100,
    minWidth: "1%",
  },
  subjectCardSub: {
    backgroundColor: "red",
    width: "95%",
    height: 100,
    top: -45,
    left: "2.5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: -1,
    marginBottom: "-10%",
    position: "relative",
  },
  actionButton: {
    width: "45%",
    top: "40%",
    borderRadius: 50,
    height: "55%",
    position: "absolute",
    justifyContent: "center",
  },
  actionButtonText: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "IBMPlexMono_700Bold",
    color: "#ffffff",
    top: "-20%",
  },
  SubjectInfo: {
    width: "100%",
    height: "120%",
    position: "absolute",
    bottom: "-10%",
    zIndex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: "100%",
  },
  subjectInfoClose: {
    position: "absolute",
    height: "12%",
    backgroundColor: "red",
    width: "52%",
    borderRadius: 100,
    bottom: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  subjectName: {
    fontFamily: "Pacifico_400Regular",
    color: "#ffffff",
    width: "75%",
    position: "absolute",
    left: "5%",
    top: "2%",
    justifyContent: "center",
    alignContent: "center",
    lineHeight: 55,
  },
  attendance: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#ffffff",
    fontSize: 30,
    width: "25%",
    position: "absolute",
    right: "5%",
    top: "2%",
  },
  hr: {
    width: "100%",
    height: "1%",
    backgroundColor: "#ffffff",
    position: "absolute",
    top: "16%",
    left: "5%",
    borderRadius: 100,
  },
  infoSubbar: {
    width: "100%",
    height: "8%",
    position: "absolute",
    top: "17%",
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#ffffff",
    fontFamily: "Caveat_700Bold",
    fontSize: 22,
  },
  exPtext: {
    color: "#ffffff",
    fontFamily: "Caveat_700Bold",
    fontSize: 22,
    position: "absolute",
    top: "24%",
    left: "5%",
    width: "100%",
    textAlign: "center",
  },
  SliderView: {
    width: "80%",
    height: "9%",
    position: "absolute",
    top: "52%",
    right: "-27%",
    borderRadius: 10,
    transform: "rotate(270deg)",
  },
  attendanceBar: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  attendanceBarSub: {
    height: "100%",
    position: "absolute",
    borderRadius: 10,
    transform: "rotate(180deg)",
  },
});
export default styles;
