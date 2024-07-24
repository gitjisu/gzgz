import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppNavigationType} from '../navigation/StackBase';
import ViewShot from 'react-native-view-shot';
import Share, {Social} from 'react-native-share';
type Props = {
  navigation: AppNavigationType;
};

const Second = ({navigation}: Props) => {
  const imageRef = useRef<ViewShot>(null);
  const [shareImage, setShareImage] = useState<string | null>(null);
  const handleSaveImage = async () => {
    // @ts-ignore
    const shareImage = await imageRef.current?.capture().then(res => {
      return res;
    });
    if (shareImage) {
      setShareImage(shareImage);
    }
  };

  const handlePressShare = async () => {
    // @ts-ignore
    const shareImage = await imageRef.current?.capture().then(res => {
      return res;
    });
    if (shareImage) {
      const image =
        Platform.OS === 'android' ? shareImage : `file://${shareImage}`;
      console.log(image);
      Share.shareSingle({
        social: Share.Social.INSTAGRAM_STORIES as Social.InstagramStories, // 인스타그램 스토리로 공유
        appId: 'facebook developer app id',
        backgroundImage: image,
        backgroundBottomColor: 'orange',
        backgroundTopColor: 'orange',
      });
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <ViewShot ref={imageRef}>
          <View>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
              source={{
                uri: 'https://velog.velcdn.com/images/aborile/post/2c73f647-268d-480d-a6f6-b0c914031621/image.png',
              }}></Image>

            <Text style={{color: 'red'}}>인스타그램으로 꼬꼬!</Text>
          </View>
        </ViewShot>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Pressable
          style={{flex: 1, borderWidth: 1}}
          onPress={() => {
            handleSaveImage();
          }}>
          <Text>저장하기</Text>
        </Pressable>
        <Pressable
          style={{flex: 1, borderWidth: 1}}
          onPress={() => {
            handlePressShare();
          }}>
          <Text>자랑하기</Text>
        </Pressable>
        <Pressable
          style={{flex: 1, borderWidth: 1}}
          onPress={() => navigation.goBack()}>
          <Text>다시뽑기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Second;
