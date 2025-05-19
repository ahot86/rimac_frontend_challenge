import { useContext, useCallback } from 'react';
import * as Context from "../context";
import { fetchPlans } from '../services/planService';
import { filterPlansByAge } from '../adapters/planAdapter';

export const usePlans = () => {
    const { state, dispatch } = useContext(Context.PlansContext);
    
    const loadFilteredPlans = useCallback(async (age: number) => {
        try {
            dispatch({ type: 'fetch-plans' });            
            const plans = await fetchPlans();
            const filtered = filterPlansByAge(plans, age);            
            dispatch({ type: 'set-plans', payload: { data: filtered } });
        } catch (error) {
            dispatch({ 
                type: 'fetch-plans-error', 
                payload: {error: error instanceof Error ? error.message : 'Error desconocido'}
            });
        }
    }, [dispatch]);
    

    if (!Context.PlansContext) {
        throw new Error("usePlans debe usarse dentro de un PlansProvider");
    }

    return {
        ...state,
        dispatch,
        loadFilteredPlans
    };
}