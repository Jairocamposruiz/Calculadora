import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: 'gray' | 'darkGray' | 'orange';
  size?: 'simple' | 'double';
  action: (x: string) => void;
}

export const ButtonCalc = ({
  text,
  color = 'darkGray',
  size = 'simple',
  action,
}: Props) => {
  const textColor = color === 'gray' ? styles.textDark : styles.textLight;
  const alignText = size === 'simple' ? styles.center : styles.left;
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={[styles.button, styles[color], styles[size]]}>
        <Text style={[styles.buttonText, textColor, alignText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: '400',
  },
  textDark: {
    color: 'black',
  },
  textLight: {
    color: 'white',
  },
  gray: {
    backgroundColor: '#9B9B9B',
  },
  darkGray: {
    backgroundColor: '#2D2D2D',
  },
  orange: {
    backgroundColor: '#FF9427',
  },
  simple: {
    height: 80,
    width: 80,
  },
  double: {
    height: 80,
    width: 180,
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
    paddingLeft: 30,
  },
});
