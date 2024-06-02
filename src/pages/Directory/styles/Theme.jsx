import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Search: {
    width: "100%",
    height: 200,
  },
  Name: {
    width: "47%",
    height: 70,
    backgroundColor: "#414B51",
    margin: "2.5%",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    paddingLeft: "2%",
    color: "#8C99A0",
    borderTopLeftRadius: 40,
    borderColor: "#8C99A0",
    borderWidth: 1,
  },
  Code: {
    width: "46%",
    height: 60,
    backgroundColor: "#414B51",
    margin: "2.5%",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    paddingLeft: "2%",
    color: "#8C99A0",
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: 40,
    borderColor: "#8C99A0",
    borderWidth: 1,
  },
  Button: {
    width: "15%",
    height: 60,
    backgroundColor: "#414B51",
    margin: "2.5%",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    top: 67,
    right: "0%",
    borderBottomRightRadius: 40,
    borderColor: "#8C99A0",
    borderWidth: 1,
  },
  selectStatus: {
    width: "39%",
    height: 76,
    backgroundColor: "#414B51",
    position: "absolute",
    top: 77.5,
    right: "20%",
    borderColor: "#1F2B32",
    borderWidth: 3,
    fontFamily: "Pacifico_400Regular",
    fontSize: 20,
    paddingLeft: "7%",
    color: "#8C99A0",
    borderColor: "#8C99A0",
    borderWidth: 1,
    padding: "5%",
  },
  selectStatusContainer: {
    backgroundColor: "#1F2B32",
    borderRadius: 10,
    color: "#8C99A0",
    fontFamily: "Pacifico_400Regular",
  },
  ButtonText: {
    fontSize: 25,
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
    marginTop: 85,
  },
  loadingOverlay: {
    height: "65%",
    position: "absolute",
    top: "25%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  placeholderStyle: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 15,
    color: "#8C99A0",
    textAlign: "center",
  },
  ContactList: {
    width: "90%",
    maxHeight: "65%",
    backgroundColor: "#414B51",
    margin: "5%",
    borderRadius: 20,
  },
  ContactCardBase: {
    width: "95%",
    height: 70,
    margin: "2.5%",
  },
  ContactCardName: {
    fontFamily: "Pacifico_400Regular",
    color: "#8C99A0",
    paddingLeft: "20%",
  },
  ContactCardDepartment: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#8C99A0",
    right: 0,
    position: "absolute",
    height: "100%",
    width: "20%",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
  },
  ContactCardNumber: {
    fontFamily: "IBMPlexMono_700Bold",
    color: "#8C99A0",
    paddingLeft: "20%",
    fontSize: 16,
    textAlignVertical: "center",
  },
  Divider: {
    width: "90%",
    height: 3,
    backgroundColor: "#8C99A0",
    marginLeft: "5%",
    borderRadius: 100,
  },
  logo: {
    width: "10%",
    height: "50%",
    position: "absolute",
    left: 0,
    margin:"2.5%",
  },
});
export default styles;
