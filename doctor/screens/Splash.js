import React, { useState, useEffect, useRef } from "react";
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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const pages = [
  {
    id: 0,
    url: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon4_2.png?alt=media&token=76167cd2-7b03-409d-a8f3-598b898c587a",
    title1: "DR. AI",
    title2:
      "Check your symptoms 24x7 for FREE with personalized AI powered medically designed symptom checker",
  },
  {
    id: 1,
    url: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon1_2.png?alt=media&token=ae69a402-a571-4e65-8117-1d154b377b2f",
    title1: "Second Opinion USA",
    title2:
      "Consult from India the world's best hospitals and specialists in USA",
  },
  {
    id: 2,
    url: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon2_2.png?alt=media&token=ab830a38-b058-426e-a285-d62ee38ef24a",
    title1: "Treatment In USA",
    title2:
      "At best USA hospitals, MayoClinic, MD Anderson, John Hopkins, Boston Children Hospital",
  },
  {
    id: 3,
    url: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fon3_2.png?alt=media&token=7183c1aa-3466-430b-99fe-d04bd9ceba73",
    title1: "Surrogacy In USA",
    title2:
      "Best Success rate, gender selection, genetic screening, USA passport",
  },
];

const Splash = ({ navigation }) => {
  console.log("Splash Screen");
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(pages[0]);
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

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.x === 0) setCurrentTitle(pages[0]);
    if (e.nativeEvent.contentOffset.x === DEVICE_WIDTH)
      setCurrentTitle(pages[1]);
    if (e.nativeEvent.contentOffset.x === 2 * DEVICE_WIDTH)
      setCurrentTitle(pages[2]);
    if (e.nativeEvent.contentOffset.x === 3 * DEVICE_WIDTH)
      setCurrentTitle(pages[3]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTitle.id <= 2) {
        scrollRef.current?.scrollTo({
          x: (currentTitle.id + 1) * DEVICE_WIDTH,
          animated: true,
        });
        setCurrentTitle(pages[currentTitle.id + 1]);
      } else {
        scrollRef.current?.scrollTo({
          x: 0,
          animated: true,
        });
        setCurrentTitle(pages[0]);
      }
      console.log("This will run every second!", currentTitle.id);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTitle]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.flexContainer}>
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
        </View>
      </View> */}
      <ScrollView
        ref={scrollRef}
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        pagingEnabled
        decelerationRate={0.85}
        snapToInterval={DEVICE_WIDTH}
        bounces={true}
        onScroll={handleScroll}
      >
        {pages.map((item, index) => (
          <View key={index} style={styles.pageContainer}>
            <Image source={{ uri: item.url }} style={styles.pageImage} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={images.logo_white}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btnLast}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.slideTitle}>{currentTitle.title1}</Text>
          <Text style={styles.slideText}>{currentTitle.title2}</Text>
        </View>
        <TouchableOpacity style={styles.u_btnContainer} onPress={RedirectLogin}>
          <Text style={styles.u_btn}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.u_btnContainer}
          onPress={RedirectRegister}
        >
          <Text style={styles.u_btn2}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.already} onPress={handleForget}>
          <Text style={styles.label2}>Forget your Password?</Text>
        </TouchableOpacity>
      </View>
      {/* {renderBg()} */}
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40e0d0",
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
  logoContainer: {
    position: "absolute",
    top: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
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
  u_btnContainer: {
    width: "85%",
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
    marginVertical: 5,
    fontWeight: "600",
    // width: "80%",
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
    marginVertical: 5,
    fontWeight: "600",
    // width: "80%",
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: "#fff",
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.greyColor,
    marginLeft: 5,
  },
  already: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 30,
    marginTop: 15,
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
    marginBottom: 10,
  },
  slideText: {
    color: "rgba(256,256,256,1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: "10%",
    marginBottom: 20,
  },
  // page
  pageContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "#40e0d0",
  },
  pageImage: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    zIndex: 1,
  },
  pageTitleContainer: {
    width: "100%",
  },
  pageTitle1: {
    fontSize: 24,
  },
  pageTitle2: {
    fontSize: 24,
  },
  btnLast: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
