import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "./Styles/FullButtonStyles";

const navigationConfig = [
  {
    icon: require("../Images/home-icon.png"),
    onPress: "HomeScreen"
  },
  {
    icon: require("../Images/target-icon.png"),
    onPress: "LaunchScreen"
  },
  {
    icon: require("../Images/bills-icon.png"),
    onPress: "BillsScreen"
  },
  {
    icon: require("../Images/profile-icon.png"),
    onPress: "ProfileScreen"
  }
];

export default class BottomTabBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  };

  render() {
    const { navigate } = this.props;

    const navigation = navigationConfig.map((tab, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => navigate(tab.onPress)}>
          <Image source={tab.icon} style={{ width: 24, height: 24, marginVertical: 10, marginHorizontal: 10 }} />
        </TouchableOpacity>
      );
    });

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          backgroundColor: "#fff",
          maxHeight: 40
        }}
      >
        {navigation}
      </View>
    );
  }
}
