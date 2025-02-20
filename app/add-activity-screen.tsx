import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
    const [steps, setSteps] = useState<number>(0);
    const { insertActivity } = useActivitiesContext();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Activity</Text>
            <TextInput
                style={styles.steps}
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
        backgroundColor: "#FFF8DC",
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
    },
    addbutton: {
        backgroundColor: "#1ED2AF",
        padding: 16,
        width: "100%",
        textAlign: "center",
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
      },
      steps: {
        backgroundColor: "#fff",
        padding: 16,
        width: "100%",
        marginBottom: 18,
        borderWidth: 3,
      }
    });