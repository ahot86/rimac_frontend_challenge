import { createContext, useReducer, useEffect } from "react";
import type { Dispatch, ReactNode } from "react";
import { UserReducer, initialState } from "../reducer/user-reducer";
import type { UserActions, UserState } from "../reducer/user-reducer";
import { UserService } from "../services/userService";

type UserContextProps = {
    state: UserState;
    dispatch: Dispatch<UserActions>;
}

type UserProviderProps = {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserProvider = ({children} : UserProviderProps) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await UserService.fetchUserData();
                dispatch({
                type: "set-user",
                payload: { data: userData },
                });
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        };
        loadUserData();
    }, []);

    return (
        <UserContext.Provider value={{state, dispatch}}>
                {children}
        </UserContext.Provider>
    )
}


