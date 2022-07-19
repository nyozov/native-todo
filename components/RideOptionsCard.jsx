import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-web";
import { Icon } from "react-native-elements";
const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw``}>
      <View>
        <TouchableOpacity>
        
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
