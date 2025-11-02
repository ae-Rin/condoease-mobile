import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="login/mainpage"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login/login1"
          options={{
            title: "Login", // Custom title for the header
            headerTitle: () => (
              <Image
                source={require("../assets/images/logo_white.png")}
                style={{ width: 200, height: 40, resizeMode: "contain" }}
              />
            ),
            headerStyle: {
              backgroundColor: "#1D2B57", // Dark blue background for the header
            },
            headerTintColor: "#FFFFFF", // White text color for the header
            headerTitleStyle: {
              fontWeight: "bold", // Bold font for the title
            },
          }}
        />
        <Stack.Screen
          name="login/login2"
          options={{
            title: "Login", // Custom title for the header
            headerTitle: () => (
              <Image
                source={require("../assets/images/logo_white.png")}
                style={{ width: 200, height: 40, resizeMode: "contain" }}
              />
            ),
            headerStyle: {
              backgroundColor: "#1D2B57", // Dark blue background for the header
            },
            headerTintColor: "#FFFFFF", // White text color for the header
            headerTitleStyle: {
              fontWeight: "bold", // Bold font for the title
            },
          }}
        />
        <Stack.Screen
          name="register/register1"
          options={{
            title: "Create Account", // Custom title for the header
            headerStyle: {
              backgroundColor: "#1D2B57", // Dark blue background for the header
            },
            headerTintColor: "#FFFFFF", // White text color for the header
            headerTitleStyle: {
              fontWeight: "bold", // Bold font for the title
            },
          }}
        />
        <Stack.Screen
          name="register/register2"
          options={{
            title: "Create Account", // Custom title for the header
            headerStyle: {
              backgroundColor: "#1D2B57", // Dark blue background for the header
            },
            headerTintColor: "#FFFFFF", // White text color for the header
            headerTitleStyle: {
              fontWeight: "bold", // Bold font for the title
            },
          }}
        />
        <Stack.Screen
          name="register/register3"
          options={{
            title: "Create Account", // Custom title for the header
            headerStyle: {
              backgroundColor: "#1D2B57", // Dark blue background for the header
            },
            headerTintColor: "#FFFFFF", // White text color for the header
            headerTitleStyle: {
              fontWeight: "bold", // Bold font for the title
            },
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
