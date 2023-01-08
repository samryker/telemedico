import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import PrimaryButton from "../Models/PrimaryButton";

const icons = [
  {
    title: "MayoClinic",
    descritpion:
      "Ranked #1 hospital overall in the US and is regularly ackno...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh1.png?alt=media&token=aad33af5-a0d1-4d9a-b304-1153e6f7d284",
    name: "hospital1",
    desc: "Ranked #1 hospital overall in the US and is regularly ackno...",
  },
  {
    title: "MD Anderson",
    descritpion: "#1 in the nation for Cancer care. More than decades of ",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh2.png?alt=media&token=425ea13a-deb7-406d-ba00-d8b7c7371fa3",
    name: "hospital2",
    desc: "#1 in the nation for Cancer care. More than decades of ",
  },
  {
    title: "Memorial Sloan Kettering Cancer center",
    descritpion: "Leading the fight against cancer. Always focused on...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh3.png?alt=media&token=6e552803-ea2f-4ea1-874a-829283a6f585",
    name: "hospital3",
    desc: "Leading the fight against cancer. Always focused on...",
  },
  {
    title: "Cleveland Clinic",
    descritpion: "Pioneered many medical breakthroughs, inc...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh4.png?alt=media&token=67f98059-0d40-4598-ac5e-ddf6d33c9d96",
    name: "hospital4",
    desc: "Pioneered many medical breakthroughs, inc...",
  },
  {
    title: "Stanford Health Care",
    descritpion: "Delivers unparalleled care for each patient's uni...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh5.png?alt=media&token=a1fcb186-f2bd-487c-b6c6-874315683248",
    name: "hospital5",
    desc: "Delivers unparalleled care for each patient's uni...",
  },
  {
    title: "Cedars-Sinai",
    descritpion: "Consistently recognized as a leader in medical r...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh6.png?alt=media&token=ec9a3863-67fe-4499-b961-d832a0a489b6",
    name: "hospital6",
    desc: "Consistently recognized as a leader in medical r...",
  },
  {
    title: "Boston Children’s Hospital",
    descritpion: "#1 Children's hospital in the nation, pushing th...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh7.png?alt=media&token=3fb78455-b51e-46d8-a54d-5a68ffd56d2c",
    name: "hospital7",
    desc: "#1 Children's hospital in the nation, pushing th...",
  },
  {
    title: "Los Angeles Children’s Hospital",
    descritpion:
      "Believe every child deserves to enjoy all those special mom...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh8.png?alt=media&token=5070d9c5-9b3c-4df2-acdd-1fb50aaa4d17",
    name: "hospital8",
    desc: "Believe every child deserves to enjoy all those special mom...",
  },
  {
    title: "John Hopkins School of Medicine",
    descritpion: "World renowned leader in patient care, have experts...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh9.png?alt=media&token=766cf45f-e260-410f-af66-6413099f8de4",
    name: "hospital9",
    desc: "World renowned leader in patient care, have experts...",
  },
  {
    title: "Massachusetts General Hospital",
    descritpion: "As the original and largest teaching hospital of Harvar...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh10.png?alt=media&token=43b84f5c-78b7-4382-add6-209246e742f8",
    name: "hospital10",
    desc: "As the original and largest teaching hospital of Harvar...",
  },
  {
    title: "Mount Sinai",
    descritpion: "Nation's largest and most respected hospitals, acclaim...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh11.png?alt=media&token=573a2b2e-ad60-4e28-b2d5-6501d7c399df",
    name: "hospital11",
    desc: "Nation's largest and most respected hospitals, acclaim...",
  },
  {
    title: "Northwestern Medicine",
    descritpion: "Is recognized for providing exemplary patient care and in...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh12.png?alt=media&token=1720acb6-8b40-4b43-b1e9-8a7db76abc84",
    name: "hospital12",
    desc: "Is recognized for providing exemplary patient care and in...",
  },
  {
    title: "UCSF Health Parnassus Campus",
    descritpion: "Is a place of discovery and invention. By adva...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh13.png?alt=media&token=4fa94c5d-ad1f-480d-b9a6-6126ad4cf352",
    name: "hospital13",
    desc: "Is a place of discovery and invention. By adva...",
  },
  {
    title: "Keck Medical Center of USC",
    descritpion: "Provides innovative care for complex medical and surgic...",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh14.png?alt=media&token=2c2b91ec-f590-4989-a97b-e5ee3bfcc2a9",
    name: "hospital13",
    desc: "Provides innovative care for complex medical and surgic...",
  },
];

const Hospitals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconFeather name="arrow-left" size={25} color="#384062" />
          </TouchableOpacity>
          <View style={styles.headerInside1}>
            <Text style={styles.headerTitle}>Top USA Hospitals</Text>
          </View>
          <View style={{ width: 20 }} />
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[0].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[0].title}</Text>
            <Text style={styles.hTitle2}>{icons[0].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[1].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[1].title}</Text>
            <Text style={styles.hTitle2}>{icons[1].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[2].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[2].title}</Text>
            <Text style={styles.hTitle2}>{icons[2].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[3].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[3].title}</Text>
            <Text style={styles.hTitle2}>{icons[3].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[4].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[4].title}</Text>
            <Text style={styles.hTitle2}>{icons[4].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[5].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[5].title}</Text>
            <Text style={styles.hTitle2}>{icons[5].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[6].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[6].title}</Text>
            <Text style={styles.hTitle2}>{icons[6].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[7].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[7].title}</Text>
            <Text style={styles.hTitle2}>{icons[7].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[8].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[8].title}</Text>
            <Text style={styles.hTitle2}>{icons[8].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[9].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[9].title}</Text>
            <Text style={styles.hTitle2}>{icons[9].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[10].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[10].title}</Text>
            <Text style={styles.hTitle2}>{icons[10].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[11].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[11].title}</Text>
            <Text style={styles.hTitle2}>{icons[11].desc}</Text>
          </View>
        </View>
        {/* Hospitals Line */}
        <View style={[styles.menuContainer, { marginBottom: 50 }]}>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[12].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[12].title}</Text>
            <Text style={styles.hTitle2}>{icons[12].desc}</Text>
          </View>
          <View style={[styles.menuItem, styles.shadow]}>
            <Image source={{ uri: icons[13].img }} style={styles.hLogo} />
            <Text style={styles.hTitle1}>{icons[13].title}</Text>
            <Text style={styles.hTitle2}>{icons[13].desc}</Text>
          </View>
        </View>
        {/* Primary Btn */}
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2FGroup.png?alt=media&token=f1daf8b4-92bd-48da-a9ef-5c16d7780a4f"
          name="Request Appointment"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#40e0d090",
  },
  headerInside1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#384062",
  },
  // menu
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  menuItem: {
    width: "42%",
    height: 180,
    borderRadius: 20,
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  hLogo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 8,
  },
  hTitle1: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    maxWidth: "90%",
  },
  hTitle2: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "center",
    maxWidth: "90%",
  },
});
