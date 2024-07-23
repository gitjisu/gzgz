import {View, Text, Pressable, Image, Modal} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppNavigationType} from '../navigation/StackBase';
import ViewShot from 'react-native-view-shot';

type Props = {
  navigation: AppNavigationType;
};

const Second = ({navigation}: Props) => {
  const imageRef = useRef<ViewShot>(null);
  const [shareImage, setShareImage] = useState<string | null>(null);
  const handlePressShare = async () => {
    console.log('자랑하기');
    // @ts-ignore
    const shareImage = await imageRef.current?.capture().then(res => {
      return res;
    });
    if (shareImage) {
      setShareImage(shareImage);
    }
  };
  return (
    <SafeAreaView>
      <ViewShot ref={imageRef}>
        <Image
          style={{width: 300, height: 300}}
          source={{
            uri: 'https://velog.velcdn.com/images/aborile/post/2c73f647-268d-480d-a6f6-b0c914031621/image.png',
          }}></Image>
        <Text>인스타그램으로 꼬꼬!</Text>
      </ViewShot>
      <Pressable>
        <Text>저장하기</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          handlePressShare();
        }}>
        <Text>자랑하기</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>다시뽑기</Text>
      </Pressable>
      {shareImage && (
        <View>
          <Image
            style={{width: 300, height: 300}}
            source={{
              uri: shareImage,
            }}></Image>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Second;
