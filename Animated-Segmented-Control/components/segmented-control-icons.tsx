import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ColorPalette } from './color-palette';
import Ionicons from '@expo/vector-icons/Ionicons';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

type SegmentedControlIconsProps = {
  options: {
    id: number,
    label: string,
    heading?: string,
    icon: IoniconName,
  }[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
};

const SegmentedControlIcons: React.FC<SegmentedControlIconsProps> = React.memo(
  ({ options, selectedOption, onOptionPress }) => {
    const { width: windowWidth } = useWindowDimensions();

    const internalPadding = 10;
    const segmentedControlWidth = windowWidth - 40;

    const itemWidth =
      (segmentedControlWidth - internalPadding) / options.length;

    const rStyle = useAnimatedStyle(() => {
      return {
        left: withTiming(
          itemWidth * options.findIndex(option => option.label === selectedOption) + internalPadding / 2
        ),
      };
    }, [selectedOption, options, itemWidth]);

    return (
      <View
        style={[
          styles.container,
          {
            height: options.some(option => option.heading) ? 65 : 55,
            width: segmentedControlWidth,
            borderRadius: 10,
            paddingLeft: internalPadding / 2,
          },
        ]}
      >
        <Animated.View
          style={[
            {
              width: itemWidth,
            },
            rStyle,
            styles.activeBox,
          ]}
        />
        {options.map((option) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onOptionPress?.(option.label);
              }}
              key={option.id}
              style={[
                {
                  width: itemWidth,
                },
                styles.labelContainer,
              ]}
            >
              <View style={{alignItems: 'center',}}>
                <Ionicons name={option.icon} size={24} color="black" />
                {
                  option.heading &&
                  <Text style={styles.label}>{option.heading}</Text>
                }
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ColorPalette.baseGray05,
  },
  activeBox: {
    position: 'absolute',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 3,
    height: '80%',
    top: '10%',
    backgroundColor: ColorPalette.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: { justifyContent: 'center', alignItems: 'center' },
  label: {
    fontFamily: 'SF-Compact-Rounded-Medium',
    fontSize: 16,
  },
});

export { SegmentedControlIcons, IoniconName };