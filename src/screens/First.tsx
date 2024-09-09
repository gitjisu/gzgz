import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppNavigationType} from '../navigation/StackBase';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlipCard from 'react-native-card-flip';
import {useFocusEffect} from '@react-navigation/native';
import missionJson from '../assets/json/mission.json';

type Props = {
  navigation: AppNavigationType;
};

const First = ({navigation}: Props) => {
  const cardRef = useRef<any>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [mission, setMission] = useState<string>('');

  const initializeState = () => {
    setTimeout(() => {
      setIsFlipped(false);
      cardRef?.current.flip();
    }, 1000);
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        initializeState();
      };
    }, []),
  );

  useEffect(() => {
    if (!isFlipped) {
      const listLen = missionJson.list.length;

      const randomNum = Math.floor(Math.random() * listLen);
      setTimeout(() => {
        setMission(missionJson.list[randomNum]);
      }, 1000);
    }
  }, [isFlipped]);

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{flex: 1, backgroundColor: '#F7D7DB'}}>
      <View
        style={{
          height: 62,
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => setDifficulty(0)}
          style={{
            flex: 1,
            backgroundColor: difficulty === 0 ? '#F7D7DB' : '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 30,
              color: difficulty === 0 ? '#333333' : '#777777',
            }}>
            낭만 초보
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setDifficulty(1)}
          style={{
            flex: 1,
            backgroundColor: difficulty === 1 ? '#F7D7DB' : '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 30,
              color: difficulty === 1 ? '#333333' : '#777777',
            }}>
            낭만 고수
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          paddingVertical: 36,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Text>
            {isFlipped
              ? `짜잔!${difficulty === 0 ? '순한맛' : '매운맛'}`
              : `카드를 뒤집어 보세요!${
                  difficulty === 0 ? '순한맛' : '매운맛'
                }`}
          </Text>
        </View>
        <FlipCard
          ref={cardRef}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}
            onPress={() => {
              setIsFlipped(true);
              cardRef?.current.flip();
            }}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
              source={require('../assets/img/front.png')}
            />
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
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: '100%', position: 'absolute'}}
              source={require('../assets/img/image24.png')}></Image>
            <View style={{borderWidth: 1, padding: 100}}>
              <Text>{mission}</Text>
            </View>
          </Pressable>
        </FlipCard>
        <View style={{height: 140}}>
          {isFlipped && (
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
                  setIsFlipped(false);
                  cardRef?.current.flip();
                }}>
                <Text>다시뽑기</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default First;
