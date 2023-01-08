import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleModal2 = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.rowMain}>
        <Text style={styles.titleStyleU}>8 Steps</Text>
        <Text style={styles.titleStyle}>Of The Surrogacy Process In USA</Text>
      </View>
    </View>
  );
};

export default TitleModal2;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 15,
  },
  rowMain: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "900",
  },
  titleStyleU: {
    fontSize: 24,
    fontWeight: "900",
    marginRight: 5,
    borderBottomColor: "#29ddc6",
    borderBottomWidth: 2,
    maxWidth: "60%",
  },
});
