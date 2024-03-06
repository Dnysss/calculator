import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

export default (props) => {
  const buttonStyle = [styles.btn];
  if (props.duplo) {
    buttonStyle.push(styles.btnDuplo);
  }

  if (props.igual) {
    buttonStyle.push(styles.btnEqual);
  }

  if (props.operate) {
    buttonStyle.push(styles.btnOparate);
  }

  if (props.ac) {
    buttonStyle.push(styles.btnAC);
  }

  if (props.bs) {
    buttonStyle.push(styles.btnBS);
  }

  return (
    <TouchableHighlight onPress={props.aoClick}>
      <Text style={buttonStyle}>{props.label}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#777",
    textAlign: "center",
  },
  btnOparate: {
    color: "#0f0",
  },
  btnEqual: {
    color: "#f00",
  },
  btnAC: {
    color: "#ff0",
  },
  btnBS: {
    color: "#0ff",
  },
  btnDuplo: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
});
