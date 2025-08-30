import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const HEADER_HEIGHT = 60;
const MIN_SECTION_HEIGHT = 100;
const MAX_TOP_SECTION_HEIGHT = SCREEN_HEIGHT * 0.7;
const DEFAULT_TOP_SECTION_HEIGHT = SCREEN_HEIGHT * 0.45;
const DRAG_HANDLE_HEIGHT = 20;

// Sample data to match your screenshot
const topSectionItems = [
  {
    id: 1,
    title: "Grocery Reminder",
  },
  {
    id: 2,
    title: "Design Sprint Notes",
  },
  {
    id: 3,
    title: "Voice Memo Summary",
  },
  {
    id: 4,
    title: "Design Sprint Notes",
  },
  {
    id: 5,
    title: "Personal Reflection",
  },
  {
    id: 6,
    title: "Meeting Agenda",
  },
  {
    id: 7,
    title: "Design Sprint Notes",
  },
  {
    id: 8,
    title: "Personal Reflection",
  },
  {
    id: 9,
    title: "Meeting Agenda",
  },
  {
    id: 10,
    title: "Meeting Agenda",
  },
];

const bottomSectionItems = [
  { title: "Send project update email", time: "in 20 min" },
  { title: "Pick up groceries", time: "12:30" },
  { title: "Call the plumber", time: "14:00" },
  { title: "Review pull requests", time: "15:30" },
  { title: "Prepare slides for meeting", time: "18:00" },
  { title: "Call the plumber", time: "04:00" },
  { title: "Pick up groceries", time: "10:00" },
  { title: "Send project update email", time: "15:30" },
];

const Card = ({ item }: { item: any }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.id}.</Text>
    <Text style={styles.cardTitle}>{item.title}</Text>
  </View>
);

const TaskItem = ({ item }: { item: any }) => (
  <View style={styles.taskItem}>
    <View style={styles.taskCheckbox} />
    <View style={styles.taskContent}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskTime}>{item.time}</Text>
    </View>
  </View>
);

export default function Index() {
  const topSectionHeight = useSharedValue(DEFAULT_TOP_SECTION_HEIGHT);

  const ANIMATION_CONFIG = { damping: 25, stiffness: 300, mass: 0.8 };
  const VELOCITY_THRESHOLD = 800;

  const startY = useSharedValue(0);
  const isDragging = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startY.value = topSectionHeight.value;
      isDragging.value = true;
    })
    .onUpdate((event) => {
      const newHeight = startY.value + event.translationY;
      topSectionHeight.value = Math.max(
        MIN_SECTION_HEIGHT,
        Math.min(newHeight, MAX_TOP_SECTION_HEIGHT)
      );
    })
    .onEnd((event) => {
      isDragging.value = false;
      const velocity = event.velocityY;
      let targetHeight;

      if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
        targetHeight =
          velocity > 0 ? DEFAULT_TOP_SECTION_HEIGHT : MAX_TOP_SECTION_HEIGHT;
      } else {
        const distances = [
          {
            h: MIN_SECTION_HEIGHT,
            d: Math.abs(topSectionHeight.value - MIN_SECTION_HEIGHT),
          },
          {
            h: DEFAULT_TOP_SECTION_HEIGHT,
            d: Math.abs(topSectionHeight.value - DEFAULT_TOP_SECTION_HEIGHT),
          },
          {
            h: MAX_TOP_SECTION_HEIGHT,
            d: Math.abs(topSectionHeight.value - MAX_TOP_SECTION_HEIGHT),
          },
        ];
        targetHeight = distances.sort((a, b) => a.d - b.d)[0].h;
      }

      topSectionHeight.value = withSpring(targetHeight, ANIMATION_CONFIG);
    });

  const topSectionAnimatedStyle = useAnimatedStyle(() => ({
    height: topSectionHeight.value,
  }));

  const dragHandleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(isDragging.value ? 1.2 : 1, ANIMATION_CONFIG),
      },
    ],
  }));

  const dragHandleContainerAnimatedStyle = useAnimatedStyle(() => ({
    top: topSectionHeight.value - DRAG_HANDLE_HEIGHT / 2,
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Ionicons name="person-sharp" size={20} color="white" />
          </View>
          <View style={styles.addButton}>
            <Ionicons name="add" size={20} color="white" />
          </View>
        </View>

        <View style={styles.mainContainer}>
          {/* Top Section - Resizable */}
          <Animated.View style={[styles.topSection, topSectionAnimatedStyle]}>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {topSectionItems.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </ScrollView>
          </Animated.View>

          {/* Bottom Section - Auto-adjusting */}
          <View style={styles.bottomSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Upcoming</Text>
            </View>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {bottomSectionItems.map((item, index) => (
                <TaskItem key={index} item={item} />
              ))}
            </ScrollView>
          </View>

          {/* Drag Handle - Positioned at boundary */}
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.dragHandleContainer,
                dragHandleContainerAnimatedStyle,
              ]}
            >
              <Animated.View
                style={[styles.dragHandle, dragHandleAnimatedStyle]}
              />
            </Animated.View>
          </GestureDetector>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  profileContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#000",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    width: 32,
    height: 32,
    backgroundColor: "#000",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  topSection: {
    backgroundColor: "white",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 30,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  tagContainer: {
    alignSelf: "flex-start",
  },
  tag: {
    fontSize: 12,
    color: "#888",
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 10,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  taskCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 2,
  },
  taskTime: {
    fontSize: 12,
    color: "#888",
  },
  dragHandleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backgroundColor: "#000000",
    marginTop: 15,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 8,
  },
});
