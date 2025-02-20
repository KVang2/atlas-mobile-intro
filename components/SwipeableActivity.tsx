import { StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";

export default function SwipeableActivity({ activity }: { activity: any }) {
    return (
        <View key={activity.id} style={styles.view}>
            <Activity activity={activity} />
        </View>
    );
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.action}>
            <Text style={styles.actionText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",