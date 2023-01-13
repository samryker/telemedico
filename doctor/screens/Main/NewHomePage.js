import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "../Models/PrimaryButton";
import TitleModal from "../Models/TitleModal";
import IconFeather from "react-native-vector-icons/Feather";
import {
  getCurrentUser,
  resetAuthSign,
  restProfileUpdatedSuccess,
  signInUser,
  signOutUser,
  signUpUser,
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton2 from "../Models/PrimaryButton2";
import { useIsFocused, useNavigation } from "@react-navigation/native";

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
const surrogacy = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy16.png?alt=media&token=f14ff3db-f746-42ce-acf5-5aff3ca9bf07",
    title: "Infertility",
    desc: [
      {
        desc: "USA Infertility Experts",
      },
      {
        desc: "Top Fertility Clinics",
      },
      {
        desc: "Ovulation Induction",
      },
      {
        desc: "Artificial Insemination",
      },
      {
        desc: "IVF",
      },
    ],
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy17.png?alt=media&token=423f06a8-11d8-4e88-ba16-9b745873afbb",
    title: "Surrogacy",
    desc: [
      {
        desc: "Gender Selection",
      },
      {
        desc: "Genetic Screening",
      },
      {
        desc: "Egg / Sperm Donors",
      },
      {
        desc: "Surrogate Mother USA",
      },
      {
        desc: "Baby USA Passport",
      },
    ],
  },
];
const hospitals1 = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh1.png?alt=media&token=aad33af5-a0d1-4d9a-b304-1153e6f7d284",
    name: "h1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh2.png?alt=media&token=425ea13a-deb7-406d-ba00-d8b7c7371fa3",
    name: "h2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh3.png?alt=media&token=6e552803-ea2f-4ea1-874a-829283a6f585",
    name: "h3",
  },
];
const hospitals2 = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh4.png?alt=media&token=67f98059-0d40-4598-ac5e-ddf6d33c9d96",
    name: "h1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh5.png?alt=media&token=a1fcb186-f2bd-487c-b6c6-874315683248",
    name: "h2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhospitals%2Fh6.png?alt=media&token=ec9a3863-67fe-4499-b961-d832a0a489b6",
    name: "h3",
  },
];
const doctors = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20A_%20Eli%20Gabayan.png?alt=media&token=ecfe7fa3-16fe-480e-8091-2516ee7cfcf2",
    name: "Dr. A. Eli Gabayan",
    spec: "Hematology/ Oncology",
    place: "Los Angeles, USA",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20Sam%20Najmabadi.png?alt=media&token=6a6d2d74-f2f1-4fb1-9751-00a564789b6c",
    name: "Dr. Sam Najmabadi",
    spec: "Fertility Expert",
    place: "California, USA",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20Raj%20Kanodia.png?alt=media&token=8190e2f4-da2b-4008-a6bf-dd156cffa0b3",
    name: "Dr. Raj Kanodia",
    spec: "Plastic Surgery, Rhinoplasty",
    place: "Beverly Hills, USA",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20David%20Berz.png?alt=media&token=51d3816c-cd55-4735-ae1e-85ce3435dd1e",
    name: "Dr. David Berz",
    spec: "Hematology/ Oncology",
    place: "Los Angeles, USA",
  },
];
const headers = [
  {
    name: "home1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fheaders%2Fhomelogo1.png?alt=media&token=3829cc10-ee91-45cf-8985-536e3fc4196c",
  },
  {
    name: "home2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fheaders%2Fhomelogo2.png?alt=media&token=a8c054e1-b2f7-4b6a-9368-07737ab27042",
  },
  {
    name: "home3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fheaders%2Fhomelogo3.png?alt=media&token=ae962473-465f-48f1-b0c8-73c87a0e3f5b",
  },
];
const menuBg = [
  {
    name: "m1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fp1.jpg?alt=media&token=528f472f-875a-4f0e-9b9d-992dff90938c",
  },
  {
    name: "m2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fp2.png?alt=media&token=3cb5d12f-5c77-4097-a485-7ffc3af273d0",
  },
  {
    name: "m3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fp3.png?alt=media&token=ed3893ff-c947-4b3c-83bd-73ff38e2ca83",
  },
  {
    name: "m4",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fp4.png?alt=media&token=936f9096-9da5-4271-8544-a40cfd81280d",
  },
];
const menuIcon = [
  {
    name: "p1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fm1.png?alt=media&token=660c1b46-b26c-4f9c-9b6a-527304412db3",
  },
  {
    name: "p2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fm2.png?alt=media&token=07060466-0082-4c30-88f8-e3a37303eb18",
  },
  {
    name: "p3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fm3.png?alt=media&token=e05c88d5-aecb-4fc4-b98e-efe1ce8b8e65",
  },
  {
    name: "p4",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FhomeMenu%2Fm4.png?alt=media&token=78367744-297b-4c56-846e-f508286c2f29",
  },
];
const specialities = [
  {
    name: "Oncology",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi1.png?alt=media&token=f1661821-11d5-49af-a6d7-15aec9a29199",
  },
  {
    name: "Cardiology",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi2.png?alt=media&token=129a9b23-9196-4d3d-a9e8-ceb041c3e073",
  },
  {
    name: "Neurology",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi3.png?alt=media&token=3cc9a091-158a-4cf6-ad4b-143036021342",
  },
  {
    name: "Rare Diseases",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi4.png?alt=media&token=3c69ad7c-d049-44e8-8cdc-e56712272886",
  },
  {
    name: "Mental Health",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi5.png?alt=media&token=136963f6-0877-40bc-8667-fa1331fe979a",
  },
  {
    name: "Infertility",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fspecialities%2Fi6.png?alt=media&token=d1bd9558-7278-4278-be45-d1bba6827d0a",
  },
];

const mapState = ({ user }) => ({
  userData: user.userData,
  userDocId: user.userDocId,
  profileUpdatedSuccess: user.profileUpdatedSuccess,
  signInSuccess: user.signInSuccess,
  signUpSuccess: user.signUpSuccess,
});

const NewHomePage = () => {
  const {
    userData,
    userDocId,
    profileUpdatedSuccess,
    signInSuccess,
    signUpSuccess,
  } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    setUserUpdated(false);
    console.log('line 285 => ', signInSuccess, signUpSuccess)
    if (signInSuccess || signUpSuccess) {

      dispatch(getCurrentUser(userDocId));
      dispatch(resetAuthSign());
      setUserUpdated(true);
    }
  }, []);

  // useEffect(() => {
  //   if (isFocused && !userUpdated && profileUpdatedSuccess) {
  //     dispatch(getCurrentUser(userDocId));
  //     dispatch(restProfileUpdatedSuccess());
  //     setUserUpdated(true);
  //   }
  // }, [userDocId, isFocused, userUpdated]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.headerInside1}>
            <Image source={{ uri: headers[0].img }} style={styles.headerImg1} />
            <View style={styles.headerInside2}>
              <Image
                source={{ uri: headers[1].img }}
                style={styles.headerImg2}
              />
              <Image
                source={{ uri: headers[2].img }}
                style={styles.headerImg3}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <IconFeather
              name="menu"
              size={25}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <TitleModal text="" isMain={true} />
        {/* Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuItem, styles.shadow]}
            onPress={() => navigation.navigate("doctors")}
          >
            <Image source={{ uri: menuBg[0].img }} style={styles.menuImg1} />
            <Image
              source={{ uri: menuIcon[0].img }}
              style={[
                styles.menuImg2,
                {
                  width: "100%",
                  height: "105%",
                  marginTop: "-5%",
                },
              ]}
            />
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle1}>USA Specialists</Text>
              <Text style={styles.menuTitle2}>
                Virtual Consultation USA Doctors
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuItem, styles.shadow]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Image source={{ uri: menuBg[1].img }} style={styles.menuImg1} />
            <Image
              source={{ uri: menuIcon[1].img }}
              style={[
                styles.menuImg2,
                {
                  width: "110%",
                  height: "105%",
                  marginLeft: "-10%",
                  marginTop: "-12%",
                },
              ]}
            />
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle1}>USA Hospitals</Text>
              <Text style={styles.menuTitle2}>World's Best Treatment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuItem, styles.shadow]}
            onPress={() => navigation.navigate("Surrogacy")}
          >
            <Image source={{ uri: menuBg[2].img }} style={styles.menuImg1} />
            <Image
              source={{ uri: menuIcon[2].img }}
              style={[
                styles.menuImg2,
                { width: "100%", height: "100%", marginTop: "-6%" },
              ]}
            />
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle1}>Surrogacy - IVF</Text>
              <Text style={styles.menuTitle2}>
                Gender Selection USA Passport
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuItem, styles.shadow]}
            onPress={() => navigation.navigate("age")}
          >
            <Image source={{ uri: menuBg[3].img }} style={styles.menuImg1} />
            <Image
              source={{ uri: menuIcon[3].img }}
              style={[
                styles.menuImg2,
                { width: "110%", height: "105%", marginTop: "-10%" },
              ]}
            />
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle1}>Dr. AI</Text>
              <Text style={styles.menuTitle2}>Check Symptoms 24*7</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Title */}
        <TitleModal text="Top USA Hospitals" isMain={false} />
        {/* Hospitals */}
        <View style={styles.hospitals}>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals1[0].img }}
              style={styles.hospitalIcon}
            />
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals1[1].img }}
              style={styles.hospitalIcon}
            />
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals1[2].img }}
              style={styles.hospitalIcon}
            />
          </View>
        </View>
        <View style={styles.hospitals}>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals2[0].img }}
              style={styles.hospitalIcon}
            />
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals2[1].img }}
              style={styles.hospitalIcon}
            />
          </View>
          <View style={[styles.hospital, styles.shadow]}>
            <Image
              source={{ uri: hospitals2[2].img }}
              style={styles.hospitalIcon}
            />
          </View>
        </View>
        {/* Primary Btn */}
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2FplusIcon.png?alt=media&token=ca43c33d-590d-4586-8d05-71eb80489826"
          name="View USA Hospitals"
          navigation={navigation}
        />
        {/* Title */}
        <TitleModal text="Specialities" isMain={false} />
        {/* Specialities */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.container, { marginBottom: 20 }]}
        >
          {specialities.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.hospital,
                styles.shadow,
                { width: 100, marginHorizontal: 10, paddingVertical: 20 },
              ]}
              onPress={() =>
                navigation.navigate("doctorList", { filter: item.name })
              }
            >
              <Image source={{ uri: item.img }} style={styles.specIcon} />
              <Text style={styles.specName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Title */}
        <TitleModal text="Top USA Specialists" isMain={false} />
        {/* Doctors */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.container, { marginBottom: 20 }]}
        >
          {doctors.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.hospital,
                styles.shadow,
                {
                  width: 140,
                  height: 180,
                  marginHorizontal: 10,
                  paddingVertical: 20,
                },
              ]}
            >
              <Image source={{ uri: item.img }} style={styles.doctorIcon} />
              <Text style={styles.specName1}>{item.name}</Text>
              <Text style={styles.specName2}>{item.spec}</Text>
              <Text style={styles.specName2}>{item.place}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Primary Btn */}
        <PrimaryButton2
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2FheartAnalIcon.png?alt=media&token=0e49d149-556f-4b09-b635-d08364f3d0a5"
          name="More USA Doctors"
          navigation={navigation}
        />
        {/* Title */}
        <TitleModal text="Bring Your Baby Home" isMain={false} />
        {/* Surrogacy */}
        <View style={styles.surrogacyContainer}>
          {/* 1 */}
          <View style={styles.surrogacy}>
            <View style={styles.surrogacyIconContainer}>
              <Image
                source={{ uri: surrogacy[1].img }}
                style={styles.surrogacyIcon}
              />
            </View>
            <View style={styles.surrogacyDesc}>
              <Text style={styles.surrogacyTitle1}>{surrogacy[0].title}</Text>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[0].desc[0].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[0].desc[1].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[0].desc[2].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[0].desc[3].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[0].desc[4].desc}
                </Text>
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
                source={{ uri: surrogacy[0].img }}
                style={styles.surrogacyIcon}
              />
            </View>
            <View style={styles.surrogacyDesc}>
              <Text style={styles.surrogacyTitle1}>{surrogacy[1].title}</Text>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[1].desc[0].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[1].desc[1].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[1].desc[2].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[1].desc[3].desc}
                </Text>
              </View>
              {/* item */}
              <View style={styles.surrogacyDotC}>
                <View style={styles.dot} />
                <Text style={styles.surrogacyTitle2}>
                  {surrogacy[1].desc[4].desc}
                </Text>
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
        {/* Primary Btn */}
        <PrimaryButton
          icon="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2FprimaryButton%2FphoneIcon.png?alt=media&token=c649540a-7b79-486e-92e0-3bdc626122af"
          name="Book Free Call Surrogacy USA"
          navigation={navigation}
        />
        {/* Title */}
        <TitleModal text="MediPocket World" isMain={false} />
        {/* desc */}
        <View style={styles.dMain}>
          <View style={[styles.dContainer, styles.shadow]}>
            <Text style={styles.dText}>
              When facing life-changing illness, getting access to premium
              healthcare of USA experts, medical opinion, teatment, gives you
              peace of mind and confidence, when you need it the most to save
              the life
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewHomePage;

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
    paddingTop: 10,
  },
  headerImg1: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 5,
  },
  headerInside2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImg2: {
    width: 150,
    height: 25,
    resizeMode: "contain",
    marginTop: 5,
  },
  headerImg3: {
    width: 150,
    height: 10,
    resizeMode: "contain",
    marginTop: 2,
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
    height: 160,
    borderRadius: 20,
    position: "relative",
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
  menuImg1: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 20,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
  },
  menuImg2: {
    resizeMode: "contain",
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 2,
  },
  menuTitleContainer: {
    backgroundColor: "#fff",
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 4,
    paddingLeft: 12,
    width: "100%",
    opacity: 0.8,
  },
  menuTitle1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuTitle2: {
    fontSize: 12,
  },
  // hospitals
  hospitals: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  hospital: {
    width: "25%",
    height: 100,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  hospitalIcon: {
    width: "80%",
    height: 80,
    resizeMode: "contain",
  },
  specName: {
    color: "#000000",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "900",
  },
  specName1: {
    color: "#000000",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "900",
  },
  specName2: {
    color: "#000000",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "600",
  },
  specIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  doctorIcon: {
    width: 80,
    height: 80,
    // resizeMode: "contain",
    borderRadius: 15,
    marginBottom: 5,
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
    marginBottom: 20,
  },
  surrogacyIconContainer: {
    width: "100%",
    padding: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyIcon: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  surrogacyDesc: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
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
  // desc
  dMain: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    marginBottom: 50,
  },
  dText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
