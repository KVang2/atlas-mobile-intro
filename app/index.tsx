import { useActivities } from "@/hooks/useActivities";
import { Link, router } from "expo-router"
import { Alert, StyleSheet, Pressable, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Activity from "@/components/Activity";
import { Activity as ActivityType} from "@/hooks/useActivities";

export default function Index() {
  const { activities } = useActivities();

  return (
    <View style={styles.container}>
      {/*<View style={styles.list}> */}
      {activities.map((activity) => (
        <Text style={styles.stepText} key={activity.id}>
          {activity.steps} Steps: {" "}
          {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))}
      
      
       {/* FlashList 
      <FlashList
        renderItem={({ item }) =><Activity activity={item} />}
        data={activities}
        estimatedItemSize={50}
        onRefresh={() => {
          Alert.alert("Refresh");
        }}
        onEndReached={() => {
          Alert.alert("End reached");
        }}/>
      </View>
    */}
      {/* Add Activity Button */}
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>

      {/* Delete all activities Button
      <Pressable style={styles.deletebutton} onPress={deleteAllActivities}>
        <Text style={styles.buttonText}>Delete all activities</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8DC",
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
  },
  stepText: {
    backgroundColor: "#fff",
    padding: 12,
    width: "90%",
  }
});