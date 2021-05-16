import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { CustomListItem } from "../components/CustomListItem";
import { auth } from "../../firebase";

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={signOutUser}>
          <Text>Click</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
