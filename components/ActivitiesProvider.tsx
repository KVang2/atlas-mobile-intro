import { useActivities } from "@/hooks/useActivities";
import { createContext, useContext } from "react";

type ActivitiesContextType = {
    activities: any[];
    getActivities: () => Promise<void>;
    insertActivity: (steps: number, date: Date) => Promise<void>;
    deleteAllActivities: () => Promise<void>;
  };

const ActivitiesContext = createContext<ReturnType<typeof useActivities> | null>(null);

export const useActivitiesContext = () => useContext(ActivitiesContext);

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
    const { activities, getActivities, insertActivity, deleteAllActivities } = useActivities();
    return (
        <ActivitiesContext.Provider value={{ activities, getActivities, insertActivity, deleteAllActivities }}>
            {children}
        </ActivitiesContext.Provider>
    );
}