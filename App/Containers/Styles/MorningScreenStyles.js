import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  morningContainer: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: '#485563'
  },
  savingStyle: {
    color: "#FFC671",
    fontSize: 72,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 40,
    shadowOpacity: 0.8
  }
})
