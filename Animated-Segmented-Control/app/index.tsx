import { ColorPalette } from "@/components/color-palette";
import { SegmentedControl } from "@/components/segmented-control";
import { useState } from "react";
import { Text, View } from "react-native";

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
      </View>
    </View>
  );
}
