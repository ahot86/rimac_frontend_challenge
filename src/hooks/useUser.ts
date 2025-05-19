import { useContext } from "react";
import * as Context from "../context";

export const useUser = () => {
    const context = useContext(Context.UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    };
    return context;
}