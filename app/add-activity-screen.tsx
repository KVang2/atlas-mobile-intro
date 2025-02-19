import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
    const [steps, setSteps] = useState<number>(0);
    const activitiesContext = useActivitiesContext();
    if (!activitiesContext) {
        return <Text>Error: Activities context is not available.</Text>;
    }
    const { insertActivity } = activitiesContext;
    return (
        <View>
            <Text>Add Activity Screen</Text>
            <TextInput
                placeholder="Enter steps"
                keyboardType="number-pad"
                onChangeText={(value) => setSteps(parseInt(value))}
            />
            <Pressable
                style={styles.addbutton}
                onPress={() => {
                insertActivity(steps, new Date());
                router.push("/");
            }}
            >
                <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            <Link style={styles.button} href={'/'} replace>
                <Text style={styles.buttonText}>Go Back</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    addbutton: {
        backgroundColor: "#1ED2AF",
        padding: 16,
        width: "100%",
        textAlign: "center",
        marginBottom: 16,
      },
    button: {
        backgroundColor: "#D00414",
        padding: 16,
        width: "100%",
        textAlign: "center",
      },
      buttonText: {
        color: "white",
        textAlign: "center",
      }
    });