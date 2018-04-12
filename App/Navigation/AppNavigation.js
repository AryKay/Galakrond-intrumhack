import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import MorningScreen from '../Containers/MorningScreen'
import BillsScreen from '../Containers/BillsScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  LaunchScreen: { screen: LaunchScreen },
  MorningScreen: { screen: MorningScreen },
  BillsScreen: { screen: BillsScreen },
  ProfileScreen: { screen: ProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MorningScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
