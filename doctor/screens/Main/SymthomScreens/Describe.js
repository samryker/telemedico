import { ISABELL_API_KEY } from "@env";
import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";

const Describe = ({ route, navigation }) => {
  //   const { age, gender, pregnant, country_id, region_id } = route.params;
  //   console.log("From Describe => ", {
  //     age,
  //     gender,
  //     pregnant,
  //     country_id,
  //     region_id,
  //   });
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");
  const [predictive, setPredictive] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");
  const getPredictive = async () => {
    await fetch("https://apiscsandbox.isabelhealthcare.com/predictive-text", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${ISABELL_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setPredictive(res.predictive_text);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getPredictive();
  }, []);
  const checkWord = (item) => {
    for (let i = 0; i < search.length; i++) {
      let f1 = item[i].match(/[a-z]/i) ? item[i].toUpperCase() : item[i];
      let f2 = search[i].match(/[a-z]/i) ? search[i].toUpperCase() : search[i];
      if (f1 !== f2) {
        return false;
      }
    }
    return true;
  };
  const handleSearch = (e) => {
    setSearch(e);
    if (e.length >= 3) {
      console.log("Length =>", predictive.length);
      let after = predictive.filter(checkWord);
      let array2 = [];
      for (let i = 0; i < 10; i++) {
        array2.push(after[i]);
      }
      setSearchArray(array2);
    }
  };

  const handleSubmit = () => {
    if (selected.length !== 0) {
      console.log("Success !!!");
      //   navigation.navigate("result", {
      //     age: age,
      //     gender: gender,
      //     pregnant: pregnant,
      //     country_id: country_id,
      //     region_id: region_id,
      //     predictive_text: selected,
      //   });
    } else {
      setSelectError("* Entering atleast one word is Required");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-back-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>DR. AI</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to the DR. AI</Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={icons.notes}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Select symthoms</Text>
            <Text style={styles.title2}>
              Please describe in your own words or select symthoms from list
            </Text>
          </View>
          <View style={styles.searchMain}>
            <View style={[styles.searchContainer, styles.shadow]}>
              <Image
                style={styles.search}
                source={icons.search}
                resizeMode="contain"
              />
              <TextInput
                style={styles.searchInput}
                value={search}
                onChangeText={(e) => handleSearch(e)}
                placeholder="Search"
                placeholderTextColor="#b2b8cc"
              />
            </View>
          </View>
          {searchArray && (
            <View style={styles.resultsContainer}>
              {searchArray.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        {selectError.length !== 0 ? (
          <Text style={styles.error}>{selectError}</Text>
        ) : null}
        {/* Submit */}
        <TouchableOpacity
          style={[styles.button1, !check ? styles.signup1 : styles.signup]}
          onPress={handleSubmit}
          disabled={!check}
        >
          <Text style={styles.signupText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Describe;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 20,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
  },
  titleConatiner: {
    padding: 5,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  title22: {
    color: COLORS.fontColor3,
    fontSize: 16,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title3: {
    color: COLORS.fontColor2,
    fontSize: 12,
    textAlign: "center",
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  icon2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  button1: {
    width: "100%",
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signup1: {
    backgroundColor: COLORS.darkgray,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signupText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
  },
  error: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
  },
  //   Search Box
  searchMain: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  searchContainer: {
    backgroundColor: "white",
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  search: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    width: "100%",
  },
  shadow: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 2,
  },
});
