import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, height = 10, backgroundColor = '#E5E5E5', progressColor = '#fafa04' }) => {
  return (
    <View style={[styles.container, { height, backgroundColor }]}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: progressColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#fafa04',
  },
});

export default ProgressBar;