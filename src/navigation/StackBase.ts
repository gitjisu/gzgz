import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  First : undefined;
  Second : undefined;
}

export namespace AppRouteProp {

}

export type AppNavigationType = NativeStackNavigationProp<RootStackParamList>