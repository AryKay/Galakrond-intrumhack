import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "react-native-elements";

import DataHandler from "../Services/DataHandler";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class MyAccounts extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const accounts = DataHandler.getAccounts();
    console.log(accounts);

    return (
      <View
        style={[styles.mainContainer, { flex: 1, backgroundColor: "#ffffff" }]}
      >
        {/* TODO: implement header with large title */}
        {/* https://medium.com/@Alexander.Kuttig/ui-guideline-specific-titles-including-ios-large-titles-with-react-native-animated-e587f006d085 */}
        {/* https://github.com/alexkuttig/react-native-view-with-title */}
        <Header
          centerComponent={{
            text: "My Accounts",
            style: { color: "#000000", fontWeight: "bold" }
          }}
          outerContainerStyles={{ backgroundColor: "#ffffff" }}
        />
        <FlatList
            data={accounts}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
      </View>
    );
  }
}
