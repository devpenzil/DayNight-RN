import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {interval: 10}); // <- initialization

  const styles = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);
    console.log(pitch * 100);
    return {
      height: withTiming(yaw * 200 + 20, {duration: 100}), // <- usage
      width: withTiming(pitch * 200 + 20, {duration: 100}), // <- usage
    };
  });
  const containerBg = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);
    return {
      backgroundColor:
        pitch * 100 > 45
          ? withTiming('#a7d4e4', {duration: 100})
          : withTiming('#293b45', {duration: 100}),
    };
  });
  const moonMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: pitch * 150,
      top: `${pitch * -100 + 20}%`,
    };
  });
  const sunMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: pitch * 50,
      bottom: `${pitch * 100 + -60}%`,
    };
  });
  const mcloudMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: `${pitch * 100 + -50}%`,
      top: 400,
    };
  });
  const mTwocloudMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: `${pitch * 100 + 50}%`,
      top: 200,
    };
  });
  const mThreecloudMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: `${pitch * 100 + 10}%`,
      top: 600,
    };
  });
  const mfourcloudMovement = useAnimatedStyle(() => {
    const yaw = Math.abs(animatedSensor.sensor.value.yaw);
    const pitch = Math.abs(animatedSensor.sensor.value.pitch);

    return {
      position: 'absolute',
      left: `${pitch * 100 + -100}%`,
      top: 300,
    };
  });
  return (
    <Animated.View style={[style.container, containerBg]}>
      <Animated.Image
        source={require('./assets/moon.png')}
        style={[moonMovement]}
      />
      <Animated.Image
        source={require('./assets/Sun.png')}
        style={[sunMovement]}
      />
      <Animated.Image
        source={require('./assets/mcloud1.png')}
        style={[mcloudMovement]}
      />
      <Animated.Image
        source={require('./assets/mcloud2.png')}
        style={[mfourcloudMovement]}
      />
      <Animated.Image
        source={require('./assets/ncloud1.png')}
        style={[mTwocloudMovement]}
      />
      <Animated.Image
        source={require('./assets/ncloud2.png')}
        style={[mThreecloudMovement]}
      />
    </Animated.View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});
