import * as React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { default as styled, css } from 'styled-components/native';

export default class App extends React.Component<any, any> {
  
  state = {
    touched: false,
    animation: new Animated.Value(0),
  }

  animationTiming: Animated.CompositeAnimation;

  render() {
    const { touched, animation } = this.state;
    const backgroundColor = animation.interpolate({
      inputRange: [0, 255],
      outputRange: [`rgba(255, 255, 255, 1.0)`, `rgba(255, 0, 0, 1.0)`],
    });
    return (
      <AnimatedContainer style={{ backgroundColor }} onTouchStart={(e: any) => {
        this.animationTiming && this.animationTiming.stop();
        this.animationTiming = Animated.timing(animation, {
          toValue: touched ? 255 : 0,
          duration: 400,
        });
        this.animationTiming.start();
        this.setState({ touched: !touched });
      }}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </AnimatedContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);