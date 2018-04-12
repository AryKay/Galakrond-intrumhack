import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 18,
    // borderTopColor: Colors.fire,
    // borderBottomColor: Colors.bloodOrange,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // backgroundColor: Colors.ember
    backgroundColor: "#2CC197"
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: "#fff",
    // color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
