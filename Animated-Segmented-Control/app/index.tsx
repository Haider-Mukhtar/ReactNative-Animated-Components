import { ColorPalette } from "@/components/color-palette";
import { SegmentedControl } from "@/components/segmented-control";
import { SegmentedControlIcons } from "@/components/segmented-control-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import type { IoniconName } from "@/components/segmented-control-icons";

export default function Index() {

  const [selectedOption2, setSelectedOption2] = useState('Option 1'); 
  const options2 = [
    'Option 1',
    'Option 2',
  ];

  const [selectedOption3, setSelectedOption3] = useState('Option 1'); 
  const options3 = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

  const [selectedOption4, setSelectedOption4] = useState('Option 1'); 
  const options4 = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ];

  const [selectedOptionIcon2, setSelectedOptionIcon2] = useState('Home'); 
  const optionsWithIcons2: { id: number; label: string; icon: IoniconName }[] = [
    {
      id: 1,
      label: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      label: 'Chat',
      icon: 'chatbox-ellipses',
    },
  ];

  const [selectedOptionIcon3, setSelectedOptionIcon3] = useState('Home'); 
  const optionsWithIcons3: { id: number; label: string; icon: IoniconName }[] = [
    {
      id: 1,
      label: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      label: 'Chat',
      icon: 'chatbox-ellipses',
    },
    {
      id: 3,
      label: 'Cart',
      icon: 'cart',
    },
  ];

  const [selectedOptionIcon4, setSelectedOptionIcon4] = useState('Home'); 
  const optionsWithIcons4: { id: number; label: string; icon: IoniconName }[] = [
    {
      id: 1,
      label: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      label: 'Chat',
      icon: 'chatbox-ellipses',
    },
    {
      id: 3,
      label: 'Cart',
      icon: 'cart',
    },
    {
      id: 4,
      label: 'Person',
      icon: 'person',
    },
  ];

  const [selectedOptionIconText, setSelectedOptionText] = useState('Home'); 
  const optionsWithIconsText: { id: number; label: string; heading: string; icon: IoniconName }[] = [
    {
      id: 1,
      label: 'Home',
      heading: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      label: 'Chat',
      heading: 'Chat',
      icon: 'chatbox-ellipses',
    },
    {
      id: 3,
      label: 'Cart',
      heading: 'Cart',
      icon: 'cart',
    },
    {
      id: 4,
      label: 'Person',
      heading: 'Account',
      icon: 'person',
    },
  ];


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorPalette.background,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "900",
          color: ColorPalette.baseGray10,
          paddingTop: 40,
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        Animated Segmented Control
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <SegmentedControl
          options={options2}
          selectedOption={selectedOption2}
          onOptionPress={setSelectedOption2}
        />
        <SegmentedControl
          options={options3}
          selectedOption={selectedOption3}
          onOptionPress={setSelectedOption3}
        />
        <SegmentedControl
          options={options4}
          selectedOption={selectedOption4}
          onOptionPress={setSelectedOption4}
        />
        {/* Icon */}
        <SegmentedControlIcons
          options={optionsWithIcons2}
          selectedOption={selectedOptionIcon2}
          onOptionPress={setSelectedOptionIcon2}
        />
        <SegmentedControlIcons
          options={optionsWithIcons3}
          selectedOption={selectedOptionIcon3}
          onOptionPress={setSelectedOptionIcon3}
        />
        <SegmentedControlIcons
          options={optionsWithIcons4}
          selectedOption={selectedOptionIcon4}
          onOptionPress={setSelectedOptionIcon4}
        />
        {/* Icon with Text */}
        <SegmentedControlIcons
          options={optionsWithIconsText}
          selectedOption={selectedOptionIconText}
          onOptionPress={setSelectedOptionText}
        />
      </View>
    </View>
  );
}
