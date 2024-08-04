import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { HomeIcon } from "../shared/Icons";

import { Link } from "expo-router";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => (
            <HomeIcon
              size={34}
              color="white"
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-left",
    height: 60,
    justifyContent: "center",

    width: "100%",
  
    
  }
})