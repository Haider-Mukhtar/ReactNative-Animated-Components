import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { SafeAreaView } from 'react-native-safe-area-context';

const DrawerSceneWrapper = ({ children }: { children: ReactNode }) => {
  const progress = useDrawerProgress();
  const animatedStyled = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolation.CLAMP
        ),
      },
      {
        scaleY: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolation.CLAMP
        ),
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, 170],
          Extrapolation.CLAMP
        ),
      },
      {
        rotateY:
          interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) +
          "deg",
      },
    ],
    borderRadius: 20,
    overflow: "hidden",
  }));

  return (
    <Animated.View style={[styles.container, animatedStyled]}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
