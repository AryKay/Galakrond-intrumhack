import { StackNavigator } from "react-navigation";

// New screens for MVP
import MyAccounts from "../Containers/MyAccounts";

// TODO: old screens, deprecate
import HomeScreen from "../Containers/HomeScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import MorningScreen from "../Containers/MorningScreen";
import BillsScreen from "../Containers/BillsScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import AskScreen from "../Containers/AskScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    // new screens
    MyAccounts: { screen: MyAccounts },

    // TODO: old screens, deprecate
    HomeScreen: { screen: HomeScreen },
    LaunchScreen: { screen: LaunchScreen },
    MorningScreen: { screen: MorningScreen },
    BillsScreen: { screen: BillsScreen },
    ProfileScreen: { screen: ProfileScreen },
    AskScreen: { screen: AskScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "MyAccounts",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
