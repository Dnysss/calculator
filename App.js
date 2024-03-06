import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import Display from "./components/Display";
import Button from "./components/Button";

let states = {
  valueDisplay: "",
  result: 0,
  operated: false,
  ponto: false,
};

export default function App() {
  const [vTela, setVTela] = useState(states.valueDisplay);
  const [vResult, setVResult] = useState(states.result);

  const addDigit = (d) => {
    if (d == "+" || d == "-" || d == "*" || d == "/") {
      states.ponto = false;
    }
    if (d == "." && !states.ponto) {
      states.ponto = true;
      states.operated = true;
    } else if (d == "." && states.ponto) {
      return;
    }
    if ((d == "+" || d == "-" || d == "*" || d == "/") && states.operated) {
      states.valueDisplay = states.result;
      states.result = 0;
    }

    states.valueDisplay = states.valueDisplay + d;
    setVTela(states.valueDisplay);
    setVResult(states.result);
    states.operated = false;
  };

  const clearDisplay = () => {
    states = {
      valueDisplay: "",
      result: 0,
      operated: false,
      ponto: false,
    };
    setVTela(states.valueDisplay);
    setVResult(states.result);
  };

  const opera = (d) => {
    if (d == "AC") {
      clearDisplay();
      return;
    }

    if (d == "BS") {
      states.valueDisplay = vTela.substring(0, vTela.length - 1);
      setVTela(states.valueDisplay);
    }

    try {
      states.result = eval(states.valueDisplay);
      states.operated = true;
      setVResult(states.result);
    } catch {
      states.result = "";
      states.operated = true;
      setVResult(states.result);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={vTela} result={vResult} />

      <View style={styles.button}>
        <Button
          label="AC"
          ac
          aoClick={() => {
            opera("AC");
          }}
        ></Button>
        <Button
          label="("
          aoClick={() => {
            addDigit("(");
          }}
        ></Button>
        <Button
          label=")"
          aoClick={() => {
            addDigit(")");
          }}
        ></Button>
        <Button
          label="/"
          oparete
          aoClick={() => {
            addDigit("/");
          }}
        ></Button>
        <Button
          label="7"
          aoClick={() => {
            addDigit("7");
          }}
        ></Button>
        <Button
          label="8"
          aoClick={() => {
            addDigit("8");
          }}
        ></Button>
        <Button
          label="9"
          aoClick={() => {
            addDigit("9");
          }}
        ></Button>
        <Button
          label="*"
          operate
          aoClick={() => {
            addDigit("*");
          }}
        ></Button>
        <Button
          label="4"
          aoClick={() => {
            addDigit("4");
          }}
        ></Button>
        <Button
          label="5"
          aoClick={() => {
            addDigit("5");
          }}
        ></Button>
        <Button
          label="6"
          aoClick={() => {
            addDigit("6");
          }}
        ></Button>
        <Button
          label="-"
          operate
          aoClick={() => {
            addDigit("-");
          }}
        ></Button>
        <Button
          label="1"
          aoClick={() => {
            addDigit("1");
          }}
        ></Button>
        <Button
          label="2"
          aoClick={() => {
            addDigit("2");
          }}
        ></Button>
        <Button
          label="3"
          aoClick={() => {
            addDigit("3");
          }}
        ></Button>
        <Button
          label="+"
          operate
          aoClick={() => {
            addDigit("+");
          }}
        ></Button>
        <Button
          label="0"
          clicaoClickk={() => {
            addDigit("0");
          }}
        ></Button>
        <Button
          label="."
          aoClick={() => {
            addDigit(".");
          }}
        ></Button>
        <Button
          label="<-"
          aoClick={() => {
            opera("BS");
          }}
        ></Button>
        <Button
          label="="
          igual
          aoClick={() => {
            opera("=");
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  button: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
