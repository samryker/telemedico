import React, { useState } from "react";
import {
  Alert,
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../constants";
import Checkbox from "expo-checkbox";

const PayCardsModel = (props) => {
  const { navigation } = props;
  // data
  const [name, setName] = useState("test User");
  const [number, setNumber] = useState("1234123412341234");
  const [date, setDate] = useState("12/12");
  const [cvc, setCvc] = useState("123");
  const [isSelected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  //   Error data
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [isSelectedError, setSelectedError] = useState(false);
  const [pay1, setPay1] = useState(false);
  const [pay2, setPay2] = useState(true);
  const [pay3, setPay3] = useState(false);
  const handleRegister = () => {
    let check = true;
    if (name.length === 0) {
      setNameError("* Card Name Field is required");
      check = false;
    } else {
      setNameError("");
    }
    if (number.length === 0) {
      setNumberError("* Card Number Field is required");
      check = false;
    } else {
      setNumberError("");
    }
    if (date.length === 0) {
      setDateError("* Expiration Date Field is required");
      check = false;
    } else {
      setDateError("");
    }
    if (cvc.length === 0) {
      setCvcError("* CV Code Field is required");
      check = false;
    } else {
      setCvcError("");
    }
    if (!isSelected) {
      setSelectedError("* Agree to the Terms & Conditions is required");
      check = false;
    } else {
      setSelectedError("");
    }
    if (check) {
      console.log("DATA =>", { name, number, isSelected });
      setModalVisible(true);
      setSuccess(true);
    }
  };
  const handlePaypal = () => {
    setPay1(true);
    setPay2(false);
    setPay3(false);
  };
  const handleMaestro = () => {
    setPay1(false);
    setPay2(true);
    setPay3(false);
  };
  const handleVisa = () => {
    setPay1(false);
    setPay2(false);
    setPay3(true);
  };
  return (
    <>
      <View style={styles.payIcons}>
        <TouchableOpacity
          onPress={handlePaypal}
          style={styles.payIconContainer}
        >
          {pay1 ? (
            <Image style={styles.clickedCard} source={icons.accept} />
          ) : null}
          <Image
            style={styles.payIcon}
            source={icons.paypal}
            resizeMode="contain"
          />
          <Text style={styles.underPayIcon}>Paypal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleMaestro}
          style={styles.payIconContainer}
        >
          {pay2 ? (
            <Image style={styles.clickedCard} source={icons.accept} />
          ) : null}
          <Image
            style={styles.payIcon}
            source={icons.maestro}
            resizeMode="contain"
          />
          <Text style={styles.underPayIcon}>Master Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVisa} style={styles.payIconContainer}>
          {pay3 ? (
            <Image style={styles.clickedCard} source={icons.accept} />
          ) : null}
          <Image
            style={styles.payIcon}
            source={icons.visa}
            resizeMode="contain"
          />
          <Text style={styles.underPayIcon}>Visa Card</Text>
        </TouchableOpacity>
      </View>
      {/* Form */}
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter Card Name"
            placeholderTextColor={"grey"}
          />
          {nameError.length === 0 ? null : (
            <Text style={styles.error}>{nameError}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder="Enter Card Number"
            placeholderTextColor={"grey"}
            keyboardType="number-pad"
          />
          {numberError.length === 0 ? null : (
            <Text style={styles.error}>{numberError}</Text>
          )}
        </View>
        <View style={styles.inputContainer2}>
          <View style={styles.codeContainer}>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="Expiration Date"
              placeholderTextColor={"grey"}
              keyboardType="number-pad"
            />
            {dateError.length === 0 ? null : (
              <Text style={styles.error}>{dateError}</Text>
            )}
          </View>
          <View style={styles.codeContainer}>
            <TextInput
              style={styles.input}
              value={cvc}
              onChangeText={setCvc}
              placeholder="CV Code"
              placeholderTextColor={"grey"}
              keyboardType="number-pad"
              maxLength={3}
            />
            {cvcError.length === 0 ? null : (
              <Text style={styles.error}>{cvcError}</Text>
            )}
          </View>
        </View>
      </View>
      {/* Terms and Condition */}
      <View style={styles.terms}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelected}
          style={styles.checkbox}
          color={"#40e0d0"}
        />
        <Text style={styles.privacy}>Agree to the Terms & Conditions</Text>
      </View>
      {isSelectedError.length === 0 ? null : (
        <Text style={styles.error}>{isSelectedError}</Text>
      )}
      {/* Pay */}
      <TouchableOpacity style={styles.button1} onPress={handleRegister}>
        <Text style={styles.signup}>Pay 100$</Text>
      </TouchableOpacity>
      {!success ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.ModelTitleView}>
                <Image
                  style={styles.ModelIcon}
                  source={icons.accept}
                  resizeMode="contain"
                />
                <Text style={styles.titleModal}>
                  Payment Successfully done!
                </Text>
              </View>
              <Text style={styles.titleModal}>Note!</Text>
              <Text style={styles.modalText}>
                Your specialists have been informed of your appointment request!
                Please fill the Patient Intake Form for your specialists to know
                about your health and put 5 main questions you want to address
                during the consultation
              </Text>
              <Pressable
                style={styles.signup2}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("intakeForm");
                }}
              >
                <Text style={styles.textStyle}>Patient Intake Form</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {/* {success ? (
        <PaySuccessModel status={true} />
      ) : (
        <PaySuccessModel status="failed" />
      )} */}
    </>
  );
};

export default PayCardsModel;

const styles = StyleSheet.create({
  payIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  payIconContainer: {
    position: "relative",
    width: "33%",
    alignItems: "center",
  },
  payIcon: {
    width: "60%",
    height: 60,
    marginBottom: 10,
  },
  underPayIcon: {
    color: COLORS.fontColor2,
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 5,
  },
  //   Input
  inputsContainer: {
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    // paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  inputContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginTop: 15,
    color: "black",
  },
  codeContainer: {
    width: "45%",
  },
  //   Terms
  terms: {
    flexDirection: "row",
    padding: 5,
    maxWidth: "100%",
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  privacy: {
    textAlign: "left",
    fontSize: 10,
    color: "black",
    marginRight: 3,
  },
  //   Btn
  button1: {
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  signup2: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  //   Clicked Card
  clickedCard: {
    position: "absolute",
    top: 0,
    right: 20,
    backgroundColor: "green",
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 5,
  },
  //   Error
  error: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
  },
  //   Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  //   button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2,
  //   },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  //   buttonClose: {
  //     backgroundColor: "#2196F3",
  //   },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ModelTitleView: {
    flexDirection: "row",
  },
  titleModal: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ModelIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    marginTop: 2,
  },
});