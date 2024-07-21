import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppNavigationType} from '../navigation/StackBase';

type Props = {
  navigation: AppNavigationType;
};

const Second = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Second</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Second;
