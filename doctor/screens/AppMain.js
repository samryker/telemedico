import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { gql, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";

import {
  BeforeSplash,
  Splash,
  Register,
  Login,
  Recovery,
  Conscent,
  Home,
  HomePage,
  Doctors,
  DoctorsList,
  Appointment,
  Payments,
  IntakeForm,
  Help,
  Age,
  Gender,
  Pregnant,
  Country,
  Describe,
  Result,
  SelectProfile,
  Profile,
  Consults,
  DoctorConsults,
  DoctorPayment,
  BeforeCall,
  Call,
} from "./index.js";
import {
  FontAwesome,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import NewHome from "./Main/NewHome";
import Hospitals from "./Main/Hospitals";
import Surrogacy from "./Main/Surrogacy";
import NewHomePage from "./Main/NewHomePage";
import NewDrawer from "./NewDrawer";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
  currentUser: user.currentUser,
  doctorD: user.doctorD,
});

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <HomeStack.Screen name="MyNewTabs" component={MyNewTabs} /> */}
      <HomeStack.Screen name="NewHomePage" component={NewHomePage} />
      <HomeStack.Screen name="Hospitals" component={Hospitals} />
      <HomeStack.Screen name="Surrogacy" component={Surrogacy} />
    </HomeStack.Navigator>
  );
};

export const MyTabs = () => {
  const { doctorD } = useSelector(mapState);
  return (
    <Tab.Navigator
      initialRouteName="homePage"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
              Home
            </Text>
          ),
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              color="#40e0d0"
              size={25}
              style={{ marginTop: 0 }}
            />
          ),
        }}
      />
      {!doctorD && (
        <>
          <Tab.Screen
            name="doctors"
            component={Doctors}
            options={{
              tabBarLabel: () => (
                <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
                  Doctors
                </Text>
              ),
              tabBarIcon: () => (
                <Fontisto
                  name="doctor"
                  color="#40e0d0"
                  size={22}
                  style={{ marginTop: 0 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="consults"
            component={Consults}
            initialParams={{ prev: "0" }}
            options={{
              tabBarLabel: () => (
                <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
                  Consultation
                </Text>
              ),
              tabBarIcon: () => (
                <Entypo
                  name="calendar"
                  color="#40e0d0"
                  size={22}
                  style={{ marginTop: 0 }}
                />
              ),
            }}
          />
        </>
      )}
      {/* <Tab.Screen
        name="age"
        component={Age}
        initialParams={{ prev: "0" }}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
              DR AI
            </Text>
          ),
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="brain"
              color="#40e0d0"
              size={25}
              style={{ marginTop: 0 }}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export const MyNewTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="homePage"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="homePage"
        component={HomeStackScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 5 }}>
              Home
            </Text>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fb1.png?alt=media&token=e44bef8d-2400-4c19-8e51-2779f8d9d887",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="doctors"
        component={Doctors}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 5 }}>
              USA Experts
            </Text>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fb2.png?alt=media&token=09be86a8-af34-490e-9a68-08cf656e8ace",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="share"
        component={Consults}
        initialParams={{ prev: "0" }}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 5 }}>
              My Consults
            </Text>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fb3.png?alt=media&token=25c1ebbd-7339-4df5-8634-421bb450526f",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ prev: "0" }}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 5 }}>
              Profile
            </Text>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fb4.png?alt=media&token=b69199c3-8e3c-4fd8-9700-21d292988e8b",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const REGISTER_QUERY = gql`
  mutation SignIn($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      refreshToken
      token
    }
  }
`;

const AppMain = ({ isLogin, userData }) => {
  const { currentUser, signInSuccess, token, errors } = useSelector(mapState);
  const [SignIn, { data, loading }] = useMutation(REGISTER_QUERY);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const [waiting, setWating] = useState(true);

  useEffect(async () => {
    console.log("isLogin", isLogin);
    console.log("userData", userData);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    if (isLogin) {
      await SignIn({
        variables: {
          email: userData.user.email,
          password: userData.user.password,
        },
      })
        .then((res) => {
          let user = {
            username: "",
            email: userData.user.email,
            password: userData.user.password,
          };

          if (res.data.tokenAuth.token) {
            dispatch(signInUser(user, res.data.tokenAuth.token));
          } else {
            console.log("res L:", res);
            setError(
              "we do not have any account with this email. try to signed up first"
            );
          }
        })
        .catch((err) => {
          console.log("error line 156", err);
        });
    } else {
      setWating(false);
    }
  }, [isLogin]);

  // useEffect(() => {
  //   if (signInSuccess) {
  //     dispatch(resetAllAuthForms());
  //     setWating(false);
  //   }
  // }, [signInSuccess]);

  // if (waiting) {
  //   return <BeforeSplash />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialeRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!currentUser && (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Conscent" component={Conscent} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recovery" component={Recovery} />
          </>
        )}
        {currentUser && (
          <>
            {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="homeTab" component={MyTabs} /> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
            {/* <Stack.Screen name="NewHome" component={NewHome} /> */}

            <Stack.Screen name="home" component={NewDrawer} />
            <Stack.Screen name="MyNewTabs" component={MyNewTabs} />
            <Stack.Screen name="Hospitals" component={Hospitals} />
            <Stack.Screen name="Surrogacy" component={Surrogacy} />
            <Stack.Screen name="doctors" component={Doctors} />
            <Stack.Screen name="doctorList" component={DoctorsList} />
            <Stack.Screen name="appointment" component={Appointment} />
            <Stack.Screen name="payment" component={Payments} />
            <Stack.Screen name="intakeForm" component={IntakeForm} />
            <Stack.Screen name="help" component={Help} />
            <Stack.Screen name="age" component={Age} />
            <Stack.Screen name="gender" component={Gender} />
            <Stack.Screen name="pregnant" component={Pregnant} />
            <Stack.Screen name="country" component={Country} />
            <Stack.Screen name="describe" component={Describe} />
            <Stack.Screen name="result" component={Result} />
            <Stack.Screen name="selectProfile" component={SelectProfile} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="consults" component={Consults} />
            <Stack.Screen name="doctorConsults" component={DoctorConsults} />
            <Stack.Screen name="doctorPayment" component={DoctorPayment} />
            <Stack.Screen name="beforecall" component={BeforeCall} />
            <Stack.Screen name="call" component={Call} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;
