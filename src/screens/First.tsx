import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppNavigationType} from '../navigation/StackBase';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlipCard from 'react-native-card-flip';
import {useFocusEffect} from '@react-navigation/native';
type Props = {
  navigation: AppNavigationType;
};

const First = ({navigation}: Props) => {
  const cardRef = useRef<any>(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  const initializeState = () => {
    setTimeout(() => {
      setButtonVisible(false);
      cardRef?.current.flip();
    }, 1000);
  };
  useFocusEffect(
    useCallback(() => {
      return () => {
        // Cleanup 함수 (화면에서 벗어날 때 실행됨)
        initializeState();
      };
    }, []),
  );
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>
      <View
        style={{
          height: 145,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 32,
        }}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          낭만을 찾으려면{'\n'}귀찮음을 감수해야 한다
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          flex: 1,
        }}>
        <FlipCard
          ref={cardRef}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '60%',
          }}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setButtonVisible(true);
              cardRef?.current.flip();
            }}>
            <Text>뒤집어!</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              cardRef?.current.jiggle({
                count: 2,
                duration: 130,
                progress: 0.5,
              });
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3N2NnFjOHFzYmNreWw4OWJpZHQybXFiMTRjaTNxbHpyZWN3N3gwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/etVRxrHtfS0tW1KIZy/giphy.webp',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </Pressable>
        </FlipCard>
        {buttonVisible && (
          <>
            <Pressable
              style={{
                borderWidth: 1,
                height: 70,
              }}
              onPress={() => navigation.navigate('Second')}>
              <Text>도전</Text>
            </Pressable>
            <Pressable
              style={{
                borderWidth: 1,
                height: 70,
              }}
              onPress={() => {
                setButtonVisible(false);
                cardRef?.current.flip();
              }}>
              <Text>다시뽑기</Text>
            </Pressable>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default First;
