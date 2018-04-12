import React from 'react';
import {
  Animated,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar'
import { Header } from 'react-native-elements'

export class ItemCard extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.any,
    selected: PropTypes.bool,
    height: PropTypes.number,
    maxHeight: PropTypes.number,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    onClose: PropTypes.func,
    progress: PropTypes.number,
    price: PropTypes.number,
    activeOpacity: PropTypes.number,

    shrinkTo: PropTypes.number,
    shrinkDuration: PropTypes.number,
    heightDuration: PropTypes.number,

    borderRadius: PropTypes.number,

    textStyle: PropTypes.any,

    closeIcon: PropTypes.element,

    content: PropTypes.element
  }

  constructor(props) {
    super(props);

    this.state = {
      heightAnim: new Animated.Value(this.props.height || 150),
      scaleAnim: new Animated.Value(1),
      selected: this.props.selected
    }    

  }

  _onPresIn = () => {

    if (this.props.selected) {
      return;
    }

    Animated.timing(this.state.scaleAnim, {
      toValue: this.props.shrinkTo || 0.96,
      duration: this.props.shrinkDuration || 200,
    }).start()
  }

  _onPressOut = () => {

    if (this.props.selected) {
      return;
    }

    Animated.timing(this.state.scaleAnim, {
      toValue: 1,
      duration: this.props.shrinkDuration || 200,
    }).start()
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.selected && !this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.maxHeight || 400,
        duration: nextProps.heightDuration || 260
      }).start()
    }

    if (!nextProps.selected && this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.height || 150,
        duration: nextProps.heightDuration || 260
      }).start()
    }

  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity || 0.8}
        onPressIn={this._onPresIn}
        onPressOut={this._onPressOut}
        onPress={this.props.onPress}
      >

        <Animated.View
          style={[
            styles.container,
            this.props.style,
            this.props.borderRadius ? { borderRadius: this.props.borderRadius } : {},
            {
              transform: [{ scale: this.state.scaleAnim }],
              height: this.state.heightAnim
            }
          ]}>
          {
            this.props.selected ?
                      <Header
           leftComponent={        <TouchableOpacity
          onPress={this.props.onClose}
          style={{ marginTop: 36, marginStart: 10 }}
        >
          <Image source={closeIcon} style={{ width: 18, height: 18 }} />
        </TouchableOpacity>}
          centerComponent={{ text: "Goals", style: { color: "#fff" } }}
          // rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: "#222A33" }}
        /> : null
          }
          <ImageBackground
            onLayout={this.props.onLayout}
            borderRadius={this.props.selected ? 0 : (this.props.borderRadius || 10)}
            source={null}
            style={[
              styles.image,
              { height: this.props.height || 150 }
            ]}
          >
           <View style={{width: 300, height: 70, backgroundColor: 'white', flexDirection: 'row', alignItems: 'flex-end'}}>
              <Image
                style={{width: 50, height: 50, marginRight: 15, marginTop: 10, marginBottom: 10}}
                source={this.props.picture}
             />
              <Text style={[styles.text, this.props.textStyle]}>
                {this.props.title}
              </Text>
           </View>
          <ProgressBar
            fillStyle={{}}
            backgroundStyle={{backgroundColor: '#DEE6EF', borderRadius: 2}}
            style={{marginTop: 10, width: 300}}
            progress={this.props.progress}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#A9A9A9'}}>{this.props.price*this.props.progress}€ of {this.props.price}€</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'right', color: '#A9A9A9'}}>{this.props.progress*100}% completed</Text>
            </View>
          </View>
          {
            this.props.selected ?
           <Image
                style={{width: 300, height: 200, marginLeft: 10, marginTop: 165}}
                source={require("../Images/chart.png")}
           /> : null }           
          </ImageBackground>
 
          {
            this.props.selected ?
              <View style={{flex: 1, padding: 20}}>
                {this.props.content || <Text>Content!</Text>}
              </View> : null
          }
        </Animated.View>
      </TouchableOpacity> 
    )
  }

}

const closeIcon = require("../Images/close-icon.png");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',    
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 0
  },
  image: {
    width: undefined,
    height: 200,
    padding: 20,
    margin: 0,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  text: {
    backgroundColor: 'transparent',
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    display: 'flex',
    marginBottom: 25
  }

});