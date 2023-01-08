import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { COLORS, images } from "../constants";
import { useDispatch } from "react-redux";
import { ResetStates } from "../redux/User/user.actions";
import Swiper from "react-native-swiper";

const Splash = ({ navigation }) => {
  console.log("Splash Screen");
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetStates());
  }, []);

  const RedirectRegister = () => {
    navigation.navigate("Register");
  };

  const RedirectLogin = () => {
    navigation.navigate("Login");
  };

  const handleForget = () => {
    navigation.navigate("Recovery");
  };
  const renderBg = () => {
    if (index === 0)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon1_2.png?alt=media&token=ae69a402-a571-4e65-8117-1d154b377b2f",
          }}
        />
      );
    if (index === 1)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon2_2.png?alt=media&token=ab830a38-b058-426e-a285-d62ee38ef24a",
          }}
        />
      );
    if (index === 2)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon3_2.png?alt=media&token=7183c1aa-3466-430b-99fe-d04bd9ceba73",
          }}
        />
      );
    if (index === 3)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon4_2.png?alt=media&token=76167cd2-7b03-409d-a8f3-598b898c587a",
          }}
        />
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{ flex: 1 }}> */}
      <View style={styles.flexContainer}>
        <Image
          style={styles.logo}
          source={images.logo_white}
          resizeMode="contain"
        />
        <View style={{ height: 200, paddingTop: 10, paddingHorizontal: 0 }}>
          <Swiper
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.5)",
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            showsButtons={false}
            onIndexChanged={(i) => setIndex(i)}
          >
            <View style={styles.slide}>
              <Text style={styles.slideTitle}>Second Opinion USA</Text>
              <Text style={styles.slideText}>
                Consult from India the world's best hospitals and specialists in
                USA
              </Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.slideTitle}>Treatment In USA</Text>
              <Text style={styles.slideText}>
                At best USA hospitals, MayoClinic, MD Anderson, John Hopkins,
                Boston Children Hospital
              </Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.slideTitle}>Surrogacy In USA</Text>
              <Text style={styles.slideText}>
                Best Success rate, gender selection, genetic screening, USA
                passport
              </Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.slideTitle}>DR. AI</Text>
              <Text style={styles.slideText}>
                Check your symptoms 24x7 for FREE with personalized AI powered
                medically designed symptom checker
              </Text>
            </View>
          </Swiper>
        </View>
        <View>
          <TouchableOpacity onPress={RedirectLogin}>
            <Text style={styles.u_btn}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={RedirectRegister}>
            <Text style={styles.u_btn2}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.already} onPress={handleForget}>
            <Text style={styles.label2}>Forget your Password?</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate("MyNewTabs")}>
            <Text style={styles.u_btn}>New Home</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      {/* </ScrollView> */}
      {renderBg()}
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  flexContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  betweenLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  hline: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: 100,
  },
  p_btn: {
    backgroundColor: COLORS.redColor,
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  u_btn: {
    backgroundColor: COLORS.blueColor,
    color: "black",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  u_btn2: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: "#fff",
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.greyColor,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  already: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  // background
  bgcontainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
  },
  // Slider
  slide: {
    justifyContent: "center",
  },
  slideTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(256,256,256,1)",
    textAlign: "center",
    marginVertical: 20,
  },
  slideText: {
    color: "rgba(256,256,256,1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 5,
    paddingHorizontal: "10%",
  },
});
