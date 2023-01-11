import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const rIcon =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2Frightarrow.png?alt=media&token=ab2e5fe9-1935-4905-a13d-7dc346de99b5";

const PrimaryButton2 = (props) => {
  const { icon, name, navigation } = props;
  return (
    <TouchableOpacity
      style={[styles.btn, styles.shadow]}
      onPress={() => navigation.navigate("doctorList", { filter: "*" })}
    >
      <Image source={{ uri: icon }} style={styles.iconStyle1} />
      <Text style={styles.btnText}>{name}</Text>
      <Image
        source={{
          uri: rIcon,
        }}
        style={styles.iconStyle2}
      />
    </TouchableOpacity>
  );
};

export default PrimaryButton2;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#44dbc8",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#cdcddd90",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  iconStyle1: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  iconStyle2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});
