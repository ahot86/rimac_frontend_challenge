import { useReducer, createContext} from 'react';
import type { Dispatch, ReactNode } from 'react';
import { PlanReducer, initialState } from '../reducer/plan-reducer';
import type { PlanActions, PlanState } from '../reducer/plan-reducer';

type PlansContextProps = {
    state: PlanState;
    dispatch: Dispatch<PlanActions>;
}

type PlansProviderProps = {
    children: ReactNode;
}

export const PlansContext = createContext<PlansContextProps>({} as PlansContextProps);

export const PlansProvider = ({children} : PlansProviderProps) => {
    const [state, dispatch] = useReducer(PlanReducer, initialState);

    return (
        <PlansContext.Provider value={{state, dispatch}}>
            {children}
        </PlansContext.Provider>
    )
}