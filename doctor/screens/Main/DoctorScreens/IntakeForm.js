import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
} from "react-native";
import { COLORS } from "../../../constants";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";

const IntakeForm = ({ route, navigation }) => {
  const { doctorName } = route?.params || "doctor not specified";
  const [indicatorLoad, setIndicatorLoad] = useState(false);
  const [help, setHelp] = useState(false);
  const [help2, setHelp2] = useState(false);
  const [modalHome, setModalHome] = useState(false);
  const [modalBack, setModalBack] = useState(false);

  //////////////////////// phone
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  //////////////////////// phone

  // f2
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [verifiedIsGood, setVerifiedIsGood] = useState(0);
  const [errorsOfUser, setErrorsOfUser] = useState("");
  // f3
  const [f3, setF3] = useState("");
  // f4
  // const [f4, setF4] = useState([]);
  const [f4_1, setF4_1] = useState(false);
  const [f4_2, setF4_2] = useState(false);
  const [f4_3, setF4_3] = useState(false);
  const [f4_4, setF4_4] = useState(false);
  const [f4_5, setF4_5] = useState(false);
  const [f4_6, setF4_6] = useState(false);
  const [f4_7, setF4_7] = useState(false);
  const [f4_8, setF4_8] = useState(false);
  const [f4_9, setF4_9] = useState(false);
  const [f4_10, setF4_10] = useState(false);
  const [f4_11, setF4_11] = useState(false);
  const [f4_12, setF4_12] = useState(false);
  // Not Used
  const [f4_13, setF4_13] = useState(false);
  const [f4_14, setF4_14] = useState(false);
  const [f4_15, setF4_15] = useState(false);
  const [f4_16, setF4_16] = useState(false);
  // Not Used
  const [f4_17, setF4_17] = useState(false);
  const [f4_18, setF4_18] = useState(false);
  const [f4_19, setF4_19] = useState(false);
  const [f4_20, setF4_20] = useState(false);
  const [f4_21, setF4_21] = useState(false);
  const [f4_22, setF4_22] = useState(false);
  const [f4_23, setF4_23] = useState(false);
  const [f4_24, setF4_24] = useState(false);
  const [f4_other, setF4_other] = useState("");
  // Medication
  const [medication, setMedication] = useState("");
  // Allergies
  const [allergies, setAllergies] = useState("");

  // f5
  // f5_1
  const [f5_1_1, setF5_1_1] = useState(false);
  const [f5_1_2, setF5_1_2] = useState(false);
  const [f5_1_3, setF5_1_3] = useState(false);
  const [f5_1_4, setF5_1_4] = useState(false);
  // f5_3
  const [f5_3_1, setF5_3_1] = useState(false);
  const [f5_3_2, setF5_3_2] = useState(false);
  const [f5_3_3, setF5_3_3] = useState(false);
  const [f5_3_4, setF5_3_4] = useState(false);

  // f5_5
  const [f5_5_1, setF5_5_1] = useState(false);
  const [f5_5_2, setF5_5_2] = useState(false);
  const [f5_5_3, setF5_5_3] = useState(false);
  const [f5_5_4, setF5_5_4] = useState(false);
  // f6
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [brother, setBrother] = useState("");
  const [sister, setSister] = useState("");
  // Top 5 Questions
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  // Request
  const [request1, setRequest1] = useState(false);
  const [request2, setRequest2] = useState(false);
  const [request3, setRequest3] = useState(false);
  const [request4, setRequest4] = useState(false);
  const [request5, setRequest5] = useState(false);
  const [request_other, setRequest_other] = useState("");
  // Appointment
  const [appointment1, setAppointment1] = useState(false);
  const [appointment2, setAppointment2] = useState(false);
  const [appointment3, setAppointment3] = useState(false);
  const [appointment4, setAppointment4] = useState(false);
  //   Error
  const [nameError, setNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // f4
  const handleOtherf4 = () => {
    setF4_24(!f4_24);
  };
  // f5
  // f5_1
  const handlef5_1_1 = () => {
    setF5_1_1(true);
    setF5_1_2(false);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  const handlef5_1_2 = () => {
    setF5_1_1(false);
    setF5_1_2(true);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  // f5_3
  const handlef5_3_1 = () => {
    setF5_3_1(true);
    setF5_3_2(false);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_2 = () => {
    setF5_3_1(false);
    setF5_3_2(true);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_3 = () => {
    setF5_3_1(false);
    setF5_3_2(false);
    setF5_3_3(true);
    setF5_3_4(false);
  };
  // f5_5
  const handlef5_5_1 = () => {
    setF5_5_1(true);
    setF5_5_2(false);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_2 = () => {
    setF5_5_1(false);
    setF5_5_2(true);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_3 = () => {
    setF5_5_1(false);
    setF5_5_2(false);
    setF5_5_3(true);
    setF5_5_4(false);
  };
  // Request
  const handleRequest1 = () => {
    setRequest1(!request1);
  };
  const handleRequest2 = () => {
    setRequest2(!request2);
  };
  const handleRequest3 = () => {
    setRequest3(!request3);
  };
  const handleRequest4 = () => {
    setRequest4(!request4);
  };
  const handleRequest5 = () => {
    setRequest5(!request5);
  };
  // Appoitment
  const handleAppointment1 = () => {
    setAppointment1(!appointment1);
  };
  const handleAppointment2 = () => {
    setAppointment2(!appointment2);
  };
  const handleAppointment3 = () => {
    setAppointment3(!appointment3);
  };
  const handleAppointment4 = () => {
    setAppointment4(!appointment4);
  };
  // Submit
  const handleSubmit = async () => {
    setIndicatorLoad(true);
    // f4
    let f4 = "";
    if (f4_1) f4 += "Anemia, ";
    if (f4_2) f4 += "Asthma, ";
    if (f4_3) f4 += "Arthritis, ";
    if (f4_4) f4 += "Cancer, ";
    if (f4_5) f4 += "Gout , ";
    if (f4_6) f4 += "Diabetes, ";
    if (f4_7) f4 += "Emotional Disorder, ";
    if (f4_8) f4 += "Epilepsy Seizures, ";
    if (f4_9) f4 += "Fainting Spells, ";
    if (f4_10) f4 += "Gallstones, ";
    if (f4_11) f4 += "Heart Disease, ";
    if (f4_12) f4 += "Heart Attack, ";
    if (f4_17) f4 += "Thyroid Problems, ";
    if (f4_18) f4 += "Tuberculosis, ";
    if (f4_19) f4 += "Venereal Disease, ";
    if (f4_20) f4 += "Neurological Disorders, ";
    if (f4_21) f4 += "Disorders, ";
    if (f4_22) f4 += "Lung Disease, ";
    if (f4_24) f4 += f4_other;
    // exercices
    let exercices = "";
    if (f5_1_1) exercices = "Never";
    if (f5_1_2) exercices = "Regularly";
    // alcohol
    let alcohol = "";
    if (f5_3_1) alcohol = "Don’t drink";
    if (f5_3_2) alcohol = "Occasional";
    if (f5_3_3) alcohol = "Daily";
    // smoke
    let smoke = "";
    if (f5_5_1) smoke = "Never";
    if (f5_5_2) smoke = "Stopped";
    if (f5_5_3) smoke = "Daily";
    // request
    let requestService = "";
    if (request1) requestService += "Expert Consultation";
    if (request2) requestService += "Second Opinion";
    if (request3) requestService += "Treatment In USA";
    if (request4) requestService += "Surrogate USA";
    if (request5) requestService += request_other;

    // appointment
    let appointment = "";
    if (appointment1) appointment += "ASAP";
    if (appointment2) appointment += "4-7 Days";
    if (appointment3) appointment += "Morning India time: 5.30am - 10am";
    if (appointment4) appointment += "Evening India time: 5.30pm - 12am";
    if (phone.length === 0 || f3.length === 0) {
      setErrorsOfUser(
        "Phone Number verification and Reason for consultation are required! PLease try again!"
      );
    } else {
      // await fetch("https://com.medipocket.world/intake/", {
      await fetch("https://com.medipocket.world/intake_form/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type_form: "intake_form",
          doc_name: doctorName,
          name: name,
          birth: birth,
          gender: gender,
          phone_number: phone,
          patient_medical_history: f4,
          father: "blank",
          mother: "blank",
          brother: "blank",
          sister: "blank",
          comments: "",
          current_medication: medication,
          list_allergies: "blank",
          healthy_unhealthy: "blank",
          reason_for_consultation: f3,
          question1: q1,
          question2: q2,
          question3: q3,
          appointment: appointment,
        }),
      })
        .then((response) => response.text())
        .then((res) => {
          setIndicatorLoad(false);
          setHelp(true);
          // navigation.navigate("homePage");
        })
        .catch((err) => {
          setIndicatorLoad(false);
          console.log("==============================================");
          console.log("Error =>", err);
        });
      console.log("DONE");
    }

    setIndicatorLoad(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Card1 */}
        <View style={[styles.header, { backgroundColor: COLORS.bgColor1 }]}>
          <TouchableOpacity
            style={styles.headerSub}
            // onPress={() => navigation.goBack()}
            onPress={() => setModalBack(true)}
          >
            <Ionicons
              name="ios-arrow-back-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerSub}
            // onPress={() => navigation.navigate("NewHomePage")}
            onPress={() => setModalHome(true)}
          >
            <Image
              style={styles.imgStyle}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ width: 20 }}></View>
        </View>
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Medical Intake Form</Text>
        </View>
        {/* Consultation for */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Consultation for</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Name */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {nameError.length === 0 ? null : (
                <Text style={styles.error}>{nameError}</Text>
              )}
            </View>
            {/* Birth */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={birth}
                onChangeText={setBirth}
                placeholder="Age"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {birthError.length === 0 ? null : (
                <Text style={styles.error}>{birthError}</Text>
              )}
            </View>
            {/* Gender */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholder="Gender"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {genderError.length === 0 ? null : (
                <Text style={styles.error}>{genderError}</Text>
              )}
            </View>
            {/* Phone Number */}
            {errorsOfUser.length > 0 && (
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#ff0000",
                    fontSize: 10,
                    marginBottom: 5,
                    marginTop: 15,
                  }}
                >
                  * Phone Number and verification Required !
                </Text>
              </View>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  errorsOfUser.length > 0
                    ? styles.inputErrorStyle
                    : styles.input,
                ]}
                value={phone}
                onChangeText={setPhone}
                placeholder="PhoneNumber"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {phoneError.length === 0 ? null : (
                <Text style={styles.error}>{phoneError}</Text>
              )}
            </View>
            {/* <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#000000",
                borderRadius: 8,
                padding: 10,
                marginVertical: 10,
              }}
              onPress={() => {
                console.log("pressed");
                signInWithPhoneNumber();
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 14, textAlign: "center" }}
              >
                Verify Phone Number
              </Text>
            </TouchableOpacity> */}
            {/* {confirm && (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={code}
                    onChangeText={setCode}
                    placeholder="OTP"
                    placeholderTextColor={"grey"}
                    keyboardType="default"
                  />
                </View>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    backgroundColor: "#000000",
                    borderRadius: 8,
                    padding: 10,
                    marginVertical: 10,
                  }}
                  onPress={() => confirmCode()}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 14, textAlign: "center" }}
                  >
                    Verify
                  </Text>
                </TouchableOpacity>
              </>
            )} */}
          </View>
        </View>
        {/* Requesting USA MEdical services for */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Requesting USA medical services for:
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={request1}
                    onValueChange={handleRequest1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Expert Consultation
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={request2}
                    onValueChange={handleRequest2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Second Opinion
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={request3}
                    onValueChange={handleRequest3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Treatment In USA
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={request4}
                    onValueChange={handleRequest4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Surrogate USA
                  </Text>
                </View>
              </View>
              {/* Line 5 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={request5}
                    onValueChange={handleRequest5}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Other
                  </Text>
                </View>
              </View>
              {request5 && (
                <>
                  <TextInput
                    style={styles.input}
                    value={request_other}
                    onChangeText={setRequest_other}
                    placeholder="Please type your requested service here"
                    placeholderTextColor={"grey"}
                    keyboardType="default"
                  />
                </>
              )}
            </View>
          </View>
        </View>
        {/* Patient Medical History */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Patient Medical History</Text>
          <Text style={styles.cardTitle3}>
            Have you ever had (Please check all that apply)
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Line 1 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_1}
                  onValueChange={() => setF4_1(!f4_1)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Anemia
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_2}
                  onValueChange={() => setF4_2(!f4_2)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Asthma
                </Text>
              </View>
            </View>
            {/* Line 2 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_3}
                  onValueChange={() => setF4_3(!f4_3)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Arthritis
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_4}
                  onValueChange={() => setF4_4(!f4_4)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Cancer
                </Text>
              </View>
            </View>

            {/* Line 3 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_5}
                  onValueChange={() => setF4_5(!f4_5)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Gout
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_6}
                  onValueChange={() => setF4_6(!f4_6)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Diabetes
                </Text>
              </View>
            </View>
            {/* Line 4 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_7}
                  onValueChange={() => setF4_7(!f4_7)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Emotional Disorder
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_8}
                  onValueChange={() => setF4_8(!f4_8)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Epilepsy Seizures
                </Text>
              </View>
            </View>
            {/* Line 5 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_9}
                  onValueChange={() => setF4_9(!f4_9)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Fainting Spells
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_10}
                  onValueChange={() => setF4_10(!f4_10)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Gallstones
                </Text>
              </View>
            </View>
            {/* Line 6 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_11}
                  onValueChange={() => setF4_11(!f4_11)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Heart Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_12}
                  onValueChange={() => setF4_12(!f4_12)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Heart Attack
                </Text>
              </View>
            </View>
            {/* Line 9 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_17}
                  onValueChange={() => setF4_17(!f4_17)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Thyroid Problems
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_18}
                  onValueChange={() => setF4_18(!f4_18)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Tuberculosis
                </Text>
              </View>
            </View>
            {/* Line 10 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_19}
                  onValueChange={() => setF4_19(!f4_19)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Venereal Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_20}
                  onValueChange={() => setF4_20(!f4_20)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Neurological Disorders
                </Text>
              </View>
            </View>
            {/* Line 11 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_21}
                  onValueChange={() => setF4_21(!f4_21)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Disorders
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_22}
                  onValueChange={() => setF4_22(!f4_22)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Lung Disease
                </Text>
              </View>
            </View>
            {/* Line 12 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_24}
                  onValueChange={handleOtherf4}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Other
                </Text>
              </View>
            </View>
            {f4_24 && (
              <>
                <TextInput
                  style={styles.input}
                  value={f4_other}
                  onChangeText={setF4_other}
                  placeholder="Please type your medical history here"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
              </>
            )}
          </View>
        </View>
        {/* Patient Family History */}
        {/* <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Patient Family History</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Please tell if your family member suffer(ed) from any health
                conditions
              </Text>
              <Text style={styles.cardTitle4}>Father</Text>
              <TextInput
                style={styles.input}
                value={father}
                onChangeText={setFather}
                placeholder="Father"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Mother</Text>
              <TextInput
                style={styles.input}
                value={mother}
                onChangeText={setMother}
                placeholder="Mother"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Brother (s)</Text>
              <TextInput
                style={styles.input}
                value={brother}
                onChangeText={setBrother}
                placeholder="Brother (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Sister (s)</Text>
              <TextInput
                style={styles.input}
                value={sister}
                onChangeText={setSister}
                placeholder="Sister (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
          </View>
        </View> */}
        {/* Current Medications */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Current Medications</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={medication}
                onChangeText={setMedication}
                placeholder="Please list all medications currently taking"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline={true}
              />
            </View>
          </View>
        </View>
        {/* Allergies */}
        {/* <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Allergies</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={allergies}
                onChangeText={setAllergies}
                placeholder="Any Food, Medicine, Seasonal allergies"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
          </View>
        </View> */}
        {/* Healthy & Unhealthy Habits */}
        {/* <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Healthy & Unhealthy Habits</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Exercise</Text>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_2}
                    onValueChange={handlef5_1_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Regularly
                  </Text>
                </View>
              </View>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_1}
                    onValueChange={handlef5_1_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Never
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Alcohol Consumption</Text>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_1}
                    onValueChange={handlef5_3_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Don’t drink
                  </Text>
                </View>
              </View>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_2}
                    onValueChange={handlef5_3_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Occasional
                  </Text>
                </View>
              </View>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_3}
                    onValueChange={handlef5_3_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Daily
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Smoke</Text>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_1}
                    onValueChange={handlef5_5_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Never
                  </Text>
                </View>
              </View>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_2}
                    onValueChange={handlef5_5_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Stopped
                  </Text>
                </View>
              </View>
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_3}
                    onValueChange={handlef5_5_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Daily
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View> */}
        {/* Reason for Consultation */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Reason For Consulting The Doctor
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              {errorsOfUser.length > 0 && (
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <Text
                    style={{
                      color: "#ff0000",
                      fontSize: 10,
                      marginBottom: 5,
                      marginTop: 15,
                    }}
                  >
                    * The reason for consulting the doctor is Required !
                  </Text>
                </View>
              )}
              <TextInput
                style={[
                  errorsOfUser.length > 0
                    ? styles.inputErrorStyle
                    : styles.input,
                ]}
                value={f3}
                onChangeText={setF3}
                placeholder="Reason for consulting the doctor"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline="true"
              />
            </View>
          </View>
        </View>
        {/* Top 3 questions */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Top 3 questions for your specialists?{" "}
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Question 1 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 1</Text>
              <TextInput
                style={styles.input}
                value={q1}
                onChangeText={setQ1}
                placeholder="Question 1"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Question 2 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 2</Text>
              <TextInput
                style={styles.input}
                value={q2}
                onChangeText={setQ2}
                placeholder="Question 2"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Question 3 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 3</Text>
              <TextInput
                style={styles.input}
                value={q3}
                onChangeText={setQ3}
                placeholder="Question 3"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
          </View>
        </View>

        {/* Healthy & Unhealthy Habits */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Appointment time slot preference
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment1}
                    onValueChange={handleAppointment1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    ASAP
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment2}
                    onValueChange={handleAppointment2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    4-7 Days
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment3}
                    onValueChange={handleAppointment3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Morning India time: 5.30am - 10am
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment4}
                    onValueChange={handleAppointment4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Evening India time: 5.30pm - 12am
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {errorsOfUser.length > 0 && (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <Text style={{ color: "#ff0000", fontSize: 12, marginVertical: 5 }}>
              {errorsOfUser}
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          {indicatorLoad ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            <Text style={styles.signup}>Submit</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
      {/* Help */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={help}
        onRequestClose={() => {
          setHelp(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.ModelTitleView}>
              <Text style={styles.titleModal}>
                Your details have been submitted Successfully
              </Text>
            </View>
            <TouchableOpacity
              style={styles.signup2}
              onPress={() => {
                setHelp(false);
                navigation.navigate("NewHomePage");
              }}
            >
              <Text style={styles.textStyle}>Back home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Help2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={help2}
        onRequestClose={() => {
          setHelp2(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fcancel.png?alt=media&token=871e1a80-7e50-4d5b-b6df-67eae1af334c",
                }}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <View style={[styles.ModelTitleView, { marginBottom: 20 }]}>
              <Text style={styles.titleModal}>
                Please fill all fields before submit
              </Text>
            </View>
            <TouchableOpacity
              style={styles.signup2}
              onPress={() => {
                setHelp2(false);
              }}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ModalBack */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalBack}
        onRequestClose={() => {
          setModalBack(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={[styles.ModelTitleView, { marginBottom: 20 }]}>
              <Text style={styles.titleModal}>
                You can only back to the home page
              </Text>
            </View>
            <View
              style={{
                width: "60%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.signup2}
                onPress={() => {
                  setModalBack(false);
                  navigation.navigate("NewHomePage");
                }}
              >
                <Text style={styles.textStyle}>Back Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signup2}
                onPress={() => {
                  setModalBack(false);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* ModalHome */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalHome}
        onRequestClose={() => {
          setModalHome(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={[styles.ModelTitleView, { marginBottom: 20 }]}>
              <Text style={styles.titleModal}>
                Do you want to go to the home page
              </Text>
            </View>
            <View
              style={{
                width: "60%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.signup2}
                onPress={() => {
                  setModalHome(false);
                  navigation.navigate("NewHomePage");
                }}
              >
                <Text style={styles.textStyle}>Go Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signup2}
                onPress={() => {
                  setModalHome(false);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default IntakeForm;

const styles = StyleSheet.create({
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
  },
  imgStyle: {
    width: 100,
    height: 40,
  },
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 0,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 5,
    borderRadius: 200,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
  },
  // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    margin: 10,
  },
  //   Find Doctor
  cardTitle: {
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  cardTitle2: {
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  cardTitle3: {
    color: COLORS.fontColor4,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  cardTitle4: {
    color: COLORS.fontColor4,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: 10,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 4,
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.bgColor1,
  },
  //   Input
  inputsContainer: {
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    // paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 0,
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
  inputContainer22: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 3,
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
  inputErrorStyle: {
    fontSize: 14,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    // marginTop: 15,
    color: "black",
    borderColor: "#ff0000",
    borderWidth: 1,
  },
  codeContainer: {
    width: "45%",
  },
  //   PersonCard
  personCard: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  // Checkbox
  checkbox_container: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  // Report
  reportImg_container: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    marginVertical: 10,
  },
  //   Submit
  button1: {
    marginVertical: 15,
    padding: 5,
    backgroundColor: COLORS.blueBtn,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  signup: {
    color: "white",
    fontSize: 22,
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
    padding: 20,
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
  ModelTitleView: {
    flexDirection: "row",
  },
  titleModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  signup2: {
    width: 120,
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  // header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 35,
    height: 35,
    marginTop: 5,
    borderRadius: 200,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 0,
  },
  imgStyle: {
    width: 100,
    height: 40,
  },
});
