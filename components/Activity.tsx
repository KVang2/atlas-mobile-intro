import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text, } from "react-native";

export default function Activity({ activity }: { activity: ActivityType }) {
    return (
        <Text style={styles.stepText}>
            {activity.steps} Steps: {new Date(activity.date).toLocaleDateString()}
        </Text>
    );
}

const styles = StyleSheet.create({
    stepText: {
        backgroundColor: "#fff",
        padding: 12,
        width: "90%",
  },
});