import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
} from 'react-native';

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff', 
    height: 15,
    overflow: 'hidden',
    borderRadius: 10,
  },
  fill: {
    backgroundColor: '#5EBE9A',
    height: 15,
    borderRadius: 10,
  }
});

export default class ProgressBar extends React.Component {

  constructor(props){
     super(props);

     this.state = {
        progress: this.props.progress,
     }
  };

  getInitialState() {
    return {
      progress: new Animated.Value(this.props.initialProgress || 0)
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
      this.update();
    }
  }

  render() {
    const value = new Animated.Value(this.state.progress);
    var fillWidth = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0 * this.props.style.width, 1 * this.props.style.width],
    });
    //  marginLeft: 'auto', marginRight: 'auto' if not in itemCard
    return (
      <View style={[styles.background, this.props.backgroundStyle, this.props.style, {borderRadius: 10}]}>
        <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}/>
      </View>
    );
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress
    }).start();
  }
};