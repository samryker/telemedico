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
import TitleModal from "../Models/TitleModal";
import TitleModal2 from "../Models/TitleModal2";

const icons = [
  {
    name: "surrogacy 1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy1.png?alt=media&token=40042125-f551-47c6-82b2-77c35ec33921",
  },
  {
    name: "surrogacy 2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy2.png?alt=media&token=c1f08820-3800-471d-9478-f6a704dafcd6",
  },
  {
    name: "surrogacy 3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy3.png?alt=media&token=ebc733e4-e5ea-4f70-94bf-ad2a51485de2",
  },
  {
    name: "surrogacy 4",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy4.PNG?alt=media&token=17cbec1f-19f9-4cc5-b939-6112c0529969",
  },
  {
    name: "surrogacy 5",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy5.PNG?alt=media&token=8c125d34-6ab1-4515-ade6-07222d0c1891",
  },
  {
    name: "surrogacy 6",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy6.PNG?alt=media&token=3ce6ffdf-52c3-411c-bcc7-89041863ff1f",
  },
  {
    name: "surrogacy 7",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy7.png?alt=media&token=d985f7bc-545e-411a-bdeb-09c4e421bd16",
  },
  {
    name: "surrogacy 8",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy8.PNG?alt=media&token=9e197333-eb39-40ad-a15a-2710a238daef",
  },
  {
    name: "surrogacy 9",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy9.PNG?alt=media&token=a953a080-36c9-47cb-817c-f1dfb5928f9b",
  },
  {
    name: "surrogacy 10",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy10.PNG?alt=media&token=d302633a-8dab-4033-b0a1-2f802b128cdc",
  },
  {
    name: "surrogacy 11",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy11.PNG?alt=media&token=7ac419de-c3c8-429f-9c05-1a4343566928",
  },
  {
    name: "surrogacy 12",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy12.PNG?alt=media&token=6104155a-d12e-49a2-8524-e1b0f5c1b40c",
  },
  {
    name: "surrogacy 13",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy13.PNG?alt=media&token=67c9981e-d228-428e-8e46-87743119fbfa",
  },
  {
    name: "surrogacy 14",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy14.PNG?alt=media&token=6a2a9bb6-0ba2-4747-9300-a45258eea58c",
  },
  {
    name: "surrogacy 15",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy15.PNG?alt=media&token=f80062a1-27ea-47d5-abdf-6e6b83c4bc58",
  },
];

const Surrogacy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconFeather name="arrow-left" size={25} color="#384062" />
          </TouchableOpacity>
          <View style={styles.headerInside1}>
            <Text style={styles.headerTitle}>Bring your baby home</Text>
          </View>
          <View style={{ width: 20 }} />
        </View>
        {/* Surrogacy */}
        <View style={styles.surrogacyContainer}>
          {/* 1 */}
          <View style={styles.surrogacy}>
            <View style={styles.surrogacyIconContainer}>
              <Image
                source={{ uri: icons[0].img }}
                style={styles.surrogacyIcon}
              />
            </View>
            <View style={styles.surrogacyDesc}>
              <Text style={styles.surrogacyTitle1}>Infertility</Text>
              {/* desc */}
              <View style={[styles.surrogacyDotC, { maxWidth: "95%" }]}>
                <Text style={[styles.surrogacyTitle2, { lineHeight: 18 }]}>
                  Not getting pregnant despite having carefully timed,
                  unprotected sex for one year?
                </Text>
              </View>
              <Text
                style={[
                  styles.surrogacyTitle1,
                  { fontSize: 14, fontWeight: "bold" },
                ]}
              >
                Treatment
              </Text>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>IVF</Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>ICSI</Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>PGD</Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>Egg & Sperm donation</Text>
              </View>
              {/* Next */}
              <TouchableOpacity
                style={styles.nextContainer}
                onPress={() => navigation.navigate("intakeForm")}
              >
                <Image source={{ uri: icons[6].img }} style={styles.nextBtn} />
              </TouchableOpacity>
            </View>
          </View>
          {/* 2 */}
          <View style={styles.surrogacy}>
            <View style={styles.surrogacyIconContainer}>
              <Image
                source={{ uri: icons[1].img }}
                style={styles.surrogacyIcon}
              />
            </View>
            <View style={styles.surrogacyDesc}>
              <Text style={styles.surrogacyTitle1}>Surrogacy</Text>
              {/* desc */}
              <View style={[styles.surrogacyDotC, { maxWidth: "95%" }]}>
                <Text style={[styles.surrogacyTitle2, { lineHeight: 18 }]}>
                  A process in which a woman carries and delivers a child for a
                  couple or individual
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <Text
                  style={{ color: "#40e0d0", fontSize: 22, fontWeight: "bold" }}
                >
                  99.3%
                </Text>
                <Text
                  style={[
                    {
                      fontSize: 14,
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                      paddingLeft: 10,
                    },
                  ]}
                >
                  surrogacy
                </Text>
              </View>
              <Text
                style={[
                  {
                    fontSize: 14,
                    fontWeight: "bold",
                    margin: 0,
                    padding: 0,
                    paddingLeft: 10,
                    marginBottom: 10,
                  },
                ]}
              >
                success rate
              </Text>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>Gender Selection</Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>Genetic Screening</Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>USA Citizenship</Text>
              </View>
              {/* Next */}
              <TouchableOpacity
                style={styles.nextContainer}
                onPress={() => navigation.navigate("intakeForm")}
              >
                <Image source={{ uri: icons[6].img }} style={styles.nextBtn} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Title2 */}
        <TitleModal2 />
        {/* Menu H */}
        <View style={styles.stak}>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>1</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[7].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>
              Consultation with USA Surrogacy Expert
            </Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>2</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[8].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>Match With a Surrogate</Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>3</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[9].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>Sign Your Surrogacy Contract</Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>4</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[10].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>
              Begin the Fertilization and Embryo Transfer Schedule
            </Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>5</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[11].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>
              Gender Selection and Genetic Screening
            </Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>6</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[12].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>Your Surrogate is Pregnant</Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>7</Text>
            <View style={styles.stakIconContainer}>
              <Image source={{ uri: icons[13].img }} style={styles.stakIcon} />
              {/* <View style={styles.separator} /> */}
            </View>
            <Text style={styles.stakTitle}>Meet Your Baby in USA</Text>
          </View>
          {/* item */}
          <View style={styles.stakRow}>
            <Text style={styles.stakNb}>8</Text>
            <Image source={{ uri: icons[14].img }} style={styles.stakIcon} />
            <Text style={styles.stakTitle}>USA Passport of Your Baby</Text>
          </View>
        </View>
        {/* Primary Btn */}
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2Fbti1.png?alt=media&token=46e85286-f2bd-435f-85ab-727bbfcc7dec"
          name="Free USA Surrogacy Consultation"
          navigation={navigation}
        />
        {/* Title */}
        <TitleModal
          text="USA Surrogacy for International Intended Parents"
          isMain={false}
        />
        {/* surrogacy */}
        <View style={styles.surrogacy2}>
          <View style={styles.surrogacyIconContainer2}>
            <Image
              source={{ uri: icons[2].img }}
              style={styles.surrogacyIcon2}
            />
          </View>
          <View style={styles.surrogacyDesc2}>
            <Text style={styles.surrogacyTitle12}>
              The United States is a well-known destination for international
              surrogacy. California, and a handful of other states, have settled
              legal processes in place that may make these surrogacy agencies in
              the USA more desirable. And with a decision as important as
              bringing a child into the world, many intended parents are willing
              to travel around the globe to ensure the best for their child and
              their family. At MediPocket Smart Surrogacy, we understand your
              situation, and our services cover everything you need to have your
              well-deserved baby.
            </Text>
          </View>
        </View>
        {/* Primary Btn */}
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2Fbti2.png?alt=media&token=ee1532a4-e2e6-42ec-9386-15d4005093df"
          name="Let Us Bring Your Baby Home"
          navigation={navigation}
        />
        {/* Title */}
        <TitleModal text="Parenthood is for Everyone" isMain={false} />
        {/* parent */}
        <View style={styles.hospitals}>
          <View style={[styles.hospital, styles.shadow]}>
            <Image source={{ uri: icons[3].img }} style={styles.hospitalIcon} />
            <Text style={styles.specName}>Married Couple</Text>
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image source={{ uri: icons[4].img }} style={styles.hospitalIcon} />
            <Text style={styles.specName}>Single Parent</Text>
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image source={{ uri: icons[5].img }} style={styles.hospitalIcon} />
            <Text style={styles.specName}>Same-Sex Couple</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Surrogacy;

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
  // surrogacy
  surrogacyContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  surrogacy: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "43%",
    marginVertical: 20,
  },
  surrogacyIconContainer: {
    width: "100%",
    padding: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyIcon: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyDesc: {
    backgroundColor: "#fff",
    width: "100%",
    height: 320,
    borderRadius: 20,
    marginTop: -20,
  },
  surrogacyTitle1: {
    fontSize: 18,
    fontWeight: "900",
    paddingLeft: 10,
    paddingTop: 15,
    marginBottom: 20,
  },
  surrogacyDotC: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#40e0d0",
    marginRight: 5,
  },
  surrogacyTitle2: {
    fontSize: 12,
    fontWeight: "600",
  },
  nextContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#D8FFF3",
  },
  nextBtn: {
    width: 18,
    height: 18,
    marginTop: 8,
    marginLeft: 10,
  },
  // stak
  stak: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  stakRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 15,
  },
  stakNb: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  stakIconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 15
  },
  stakIcon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    marginRight: 10,
  },
  stakTitle: {
    color: "#000",
    fontSize: 14,
    maxWidth: "80%",
  },
  separator: {
    width: 3,
    height: 15,
    backgroundColor: "#40e0d0",
    borderRadius: 2,
    marginLeft: -10,
    marginTop: 2,
  },
  // surrogacy 2
  surrogacy2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: 20,
    paddingLeft: "5%",
  },
  surrogacyIconContainer2: {
    width: "100%",
    padding: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyIcon2: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyDesc2: {
    backgroundColor: "#fff",
    width: "100%",
    height: 320,
    borderRadius: 20,
    marginTop: -20,
    padding: 15,
  },
  surrogacyTitle12: {
    fontSize: 14,
    fontWeight: "900",
    paddingLeft: 10,
    paddingTop: 15,
    marginBottom: 20,
    lineHeight: 20,
  },
  // hospitals
  hospitals: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  hospital: {
    width: "28%",
    height: 120,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  hospitalIcon: {
    width: "50%",
    height: 50,
    resizeMode: "contain",
  },
  specName: {
    color: "#000000",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "900",
    marginTop: -15,
  },
});
