import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'
import styles from './Styles/GoalStyle'
import { Images } from '../Themes'


export default class Goal extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
            <Header
  leftComponent={<TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>}
  centerComponent={{ text: 'Goals', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
  outerContainerStyles={{ backgroundColor: '#000000' }}
      />
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
      </View>
    )
  }
}
