import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Search: {
    width: "100%",
    height: 100,
  },
  Name: {
    width: "95%",
    height: 70,
    backgroundColor: "#414B51",
    borderRadius: 100,
    margin: "2.5%",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    paddingLeft: "2%",
  },
  Code: {
    width: "45%",
    height: 70,
    backgroundColor: "#414B51",
    borderRadius: 100,
    margin: "2.5%",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    paddingLeft: "2%",
  },
  Button: {
    width: "45%",
    height: 60,
    backgroundColor: "#414B51",
    borderRadius: 100,
    margin: "2.5%",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    top: 90,
    right: "0%",
  },
  ButtonText: {
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    color: "#8C99A0",
    width: "100%",
    textAlign: "center",
  },
  hr: {
    width: "90%",
    height: 10,
    backgroundColor: "#414B51",
    marginHorizontal: "5%",
    borderRadius: 100,
  },
  loadingOverlay: {
    height: "65%",
    position: "absolute",
    top: "25%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  PaperList: {
    height: "95%",
    width: "100%",
    top: 101,
  },
  PaperCardBase: {
    width: "95%",
    height: 150,
    left: "2.5%",
  },
  PaperCard: {
    width: "100%",
    height: "90%",
    borderRadius: 30,
    padding: "5%",
  },
  PaperCardName: {
    fontFamily: "Pacifico_400Regular",
    color: "#ffffff",
    position: "absolute",
    left: "5%",
    top: "15%",
    lineHeight: 50,
  },
  PaperCardType: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#ffffff",
    position: "absolute",
    right: "5%",
    top: "15%",
    lineHeight: 50,
    fontSize: 30,
  },
  PaperCardSession: {
    fontFamily: "Caveat_700Bold",
    color: "#ffffff",
    position: "absolute",
    left: "5%",
    top: "75%",
    lineHeight: 50,
    fontSize: 20,
  },
  PaperCardCode: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#ffffff",
    position: "absolute",
    right: "5%",
    top: "75%",
    lineHeight: 50,
    fontSize: 20,
  },
  divider: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 100,
    height: 5,
    top: "53%",
  },
  contribute: {
    width: "50%",
    height: "5%",
    position: "absolute",
    bottom: "8.5%",
    left: "25%",
    borderRadius: 99,
    backgroundColor: "#1F2B32",
    borderColor: "#414B51",
    borderWidth: 1,
  },
  contributeText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    textAlign: "center",
  },
  PopUp: {
    width: "100%",
    height: 350,
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
    height: 65,
    backgroundColor: "#414B51",
    borderRadius: 50,
    position: "absolute",
    top: "5%",
    left: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    fontFamily: "Pacifico_400Regular",
    fontSize: 20,
    paddingLeft: "7%",
    color: "#8C99A0",
  },
  AddInput2: {
    width: "43%",
    height: 65,
    backgroundColor: "#414B51",
    borderRadius: 50,
    position: "absolute",
    top: 85,
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
    height: 65,
    backgroundColor: "#414B51",
    borderRadius: 30,
    position: "absolute",
    top: "5%",
    right: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  Cancel: {
    width: "40%",
    height: 60,
    backgroundColor: "#414B51",
    borderRadius: 30,
    position: "absolute",
    bottom: "1%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderStyle: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 15,
    color: "#8C99A0",
    textAlign: "center",
  },
  selectPaper: {
    width: "43%",
    height: 65,
    backgroundColor: "#414B51",
    borderRadius: 50,
    position: "absolute",
    top: 85,
    right: "5%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    fontFamily: "Pacifico_400Regular",
    fontSize: 20,
    paddingLeft: "7%",
    color: "#8C99A0",
  },
  selectPaperContainer: {
    backgroundColor: "#1F2B32",
    borderRadius: 10,
    color: "#8C99A0",
    fontFamily: "Pacifico_400Regular",
  },
  loadingScreen: {
    height: "300%",
    width: "100%",
    backgroundColor: "rgba(31, 43, 50, 0.7)",
    zIndex: 1,
    top: "-150%",
    justifyContent: "center",
  },
});
export default styles;