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
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 3,
        width: "90%",
        alignContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 10,
        marginBottom: 10,
  },
});