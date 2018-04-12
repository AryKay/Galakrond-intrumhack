import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import MorningScreen from '../Containers/MorningScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  LaunchScreen: { screen: LaunchScreen },
  MorningScreen: { screen: MorningScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MorningScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
