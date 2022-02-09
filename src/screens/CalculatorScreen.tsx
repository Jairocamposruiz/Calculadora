/* eslint-disable*/
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  useEffect(() => {
    SplashScreen.hide(); //Esconde el splash screen en caso de tenerlo modificado
  }, []);

  const {
    number,
    prevNumber,
    add,
    subtract,
    multiply,
    divide,
    clean,
    switchPositiveNegative,
    mountNumber,
    calculate,
    deleteLastNumber,
  } = useCalculator();
  return (
    <View style={ styles.calculatorContainer }>
      { prevNumber !== '0' && (
        <Text style={ styles.resultLittle }>{ prevNumber }</Text>
      ) }
      <Text style={ styles.result } numberOfLines={ 1 } adjustsFontSizeToFit>
        { number }
      </Text>
      <View style={ styles.row }>
        <ButtonCalc text="C" color="gray" action={ clean } />
        <ButtonCalc text="+/-" color="gray" action={ switchPositiveNegative } />
        <ButtonCalc text="Del" color="gray" action={ deleteLastNumber } />
        <ButtonCalc text="/" color="orange" action={ divide } />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text="7" action={ mountNumber } />
        <ButtonCalc text="8" action={ mountNumber } />
        <ButtonCalc text="9" action={ mountNumber } />
        <ButtonCalc text="X" color="orange" action={ multiply } />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text="4" action={ mountNumber } />
        <ButtonCalc text="5" action={ mountNumber } />
        <ButtonCalc text="6" action={ mountNumber } />
        <ButtonCalc text="-" color="orange" action={ subtract } />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text="1" action={ mountNumber } />
        <ButtonCalc text="2" action={ mountNumber } />
        <ButtonCalc text="3" action={ mountNumber } />
        <ButtonCalc text="+" color="orange" action={ add } />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text="0" action={ mountNumber } size="double" />
        <ButtonCalc text="." action={ mountNumber } />
        <ButtonCalc text="=" color="orange" action={ calculate } />
      </View>
    </View>
  );
};
