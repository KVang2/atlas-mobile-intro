import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router"
import { StyleSheet, Pressable, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Activity from "@/components/Activity";

export default function Index() {
  const context = useActivitiesContext();
  if (!context) {
    return null;
  }
  const { activities, deleteAllActivities } = context;
  return (
    <View style={styles.container}>
        {/* {activities.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))} */}

      {/* FlashList */}
      <FlashList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={50}
        renderItem={({ item }) => <Activity activity={item} />}
        contentContainerStyle={styles.list}
      />

      {/* Add Activity Button */}
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>

      {/* Delete all activities Button */}
      <Pressable style={styles.deletebutton} onPress={deleteAllActivities}>
        <Text style={styles.buttonText}>Delete all activities</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  list: {
    paddingVertical: 10,
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  deletebutton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  stepText: {
    backgroundColor: "#fff",
    padding: 12,
    width: "90%",
  }
});