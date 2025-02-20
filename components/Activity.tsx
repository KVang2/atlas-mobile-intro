import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text, View } from "react-native";

export default function Activity({ activity }: { activity: ActivityType }) {
    return (
        <View style={styles.activityContainer}>
            <Text style={styles.dateText}>
                {new Date(activity.date).toLocaleString()} 
            </Text>

            <Text style={styles.stepText}>
                Steps: {activity.steps}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    activityContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderWidth: 3,
        width: "90%",
        alignContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 5,
        marginBottom: 5,
        alignItems: "flex-start",
    },
    dateText: {
        backgroundColor: "#fff",
        fontSize: 10,
    },
    stepText: {
        backgroundColor: "#fff",
        fontSize: 20,
  },
});