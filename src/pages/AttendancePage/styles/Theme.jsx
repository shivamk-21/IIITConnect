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
  },
  addButton: {
    width: "100%",
    height: "100%",
  },
  PopUp: {
    width: "100%",
    height: "30%",
    backgroundColor: "#414B51",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    minHeight:250
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '95%',
    zIndex:2
  },
  SliderFake:{
    width: "90%",
    height: "10%",
    backgroundColor: "#2C3236",
    position: "absolute",
    top: "45%",
    left: "5%",
    borderRadius: 50,
  },
  SliderFakeInner:{
    height: "100%",
    backgroundColor: "#8C99A0",
    position: "absolute",
    top: "0%",
    left: "0%",
    borderRadius: 100,
    zIndex:1,
    width:"10%"
  }
});
export default styles;
