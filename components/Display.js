import { StyleSheet, Text, View } from "react-native";

export default (props) => {
  return (
    <View style={style.display}>
      <Text style={style.textDisplayOparate} numberOfLines={1}>
        {props.valor}
      </Text>

      <Text style={style.textDisplayResult} numberOfLines={1}>
        {props.result}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#444",
    width: "100%",
  },
  textDisplayResult: {
    fontSize: 50,
    color: "#fff",
  },
  textDisplayOparate: {
    fontSize: 25,
    color: "#fff",
  },
});
