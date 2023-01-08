import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleModal = (props) => {
  const { text, isMain } = props;
  return (
    <View style={styles.titleContainer}>
      {isMain ? (
        <View style={styles.rowMain}>
          <Text style={styles.titleStyleU}>USA</Text>
          <Text style={styles.titleStyle}>Medical Services</Text>
        </View>
      ) : (
        <Text style={styles.titleStyle}>{text}</Text>
      )}
    </View>
  );
};

export default TitleModal;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 15,
  },
  rowMain: {
    flexDirection: "row",
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
  },
});
