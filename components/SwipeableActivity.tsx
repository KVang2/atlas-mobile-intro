import { StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivitiesContext } from "./ActivitiesProvider";

export default function SwipeableActivity({ activity }: { activity: any }) {
    return (
        <View key={activity.id} style={styles.view}>
            <Swipeable
                renderLeftActions={() => <Action text="Delete" />}
                renderRightActions={() => <Action text="Delete" />}
            >
                <Activity activity={activity} />
            </Swipeable>
        </View>
    );
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.actionView}>
            <Text style={styles.actionText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#FFF8DC",
        color: "#D00414",
    },
    actionView: {
        backgroundColor: "#FFF8DC",
        justifyContent: "center",
        alignItems: "center",
        width: 85,

    },
    actionText: {
        color: "#fff",
        backgroundColor: "#D00414",
        margin: 10,
        height: 80,
        width: 40,
    }
});