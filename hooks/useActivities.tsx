import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export type Activity = {
    id: number;
    steps: number;
    date: string;
};

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);

    const db = useSQLiteContext();

    async function getActivities() {
        const data = await db.getAllSync<Activity>("SELECT * FROM activities");
        setActivities(data);
    }

    async function insertActivity(steps: number, date: Date) {
        await db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`);
        reload();
    }

    async function deleteAllActivities() {
        try {
            await db.execSync("DELETE FROM activities");
            await getActivities();
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteActivity() {
        try {
            await db.execSync("DELETE FROM activities WHERE id = 1");
            await getActivities();
        } catch (error) {
            console.error(error);
        }  
    }

    async function reload() {
        await getActivities();
    }

    useEffect(() => {
       getActivities();
    }, []);

    return { getActivities, activities, insertActivity, deleteAllActivities };
}