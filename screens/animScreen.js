import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

import color from '../constants/theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../constants/CustomText';

export default class animScreen extends Component {
  constructor() {
    super();
    this.state = {
      width: new Animated.Value(120),
      viewState: false,
    };
  }

  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.width, {
        toValue: 120,
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.width, {
        toValue: 44,
        timing: 1500,
        useNativeDriver: false,
      }).start(this.setState({viewState: true}));
    }
  };

  render() {
    const animatedStyle = {
      width: this.state.width,
    };

    return (
      <TouchableWithoutFeedback onPress={this.toggleAnimation}>
        <Animated.View style={[styles.animatedBox, animatedStyle]}>
          <MaterialIcons name="support-agent" color="black" size={28} />
          <CustomText
            style={{marginLeft: 8, opacity: this.state.viewState ? 0 : 1}}>
            Ask Expert
          </CustomText>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  animatedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primary,
    alignSelf: 'baseline',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 3,
    overflow: 'hidden',
    height: 44,
  },

  text: {
    color: '#FFFFFF',
  },
});
