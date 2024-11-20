import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.itemBackground },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/create"
        options={{
          headerStyle: { backgroundColor: Colors.itemBackground },
          presentation: "modal",
          title: "New thread",
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-circle"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/edit-profile"
        options={{
          headerStyle: { backgroundColor: Colors.itemBackground },
          presentation: "modal",
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Text style={{ color: "white" }}>キャンセル</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/image/[url]"
        options={{
          presentation: "fullScreenModal",
          title: "",
          headerStyle: { backgroundColor: "black" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-circle"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
