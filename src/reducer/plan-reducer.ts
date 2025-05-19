import type { planType } from "../types/planTypes";

export type PlanActions = 
    {type: 'fetch-plans'} |
    {type: 'set-plans', payload: {data: planType[]}} |
    {type: 'fetch-plans-error', payload: {error: string}} |
    {type: 'set-plan-selected', payload: {name: string, price: number}}

export type PlanState = {
    loading: boolean,
    error: string | null,
    filteredPlans: planType[],
    namePlan : string,
    pricePlan : number
}

export const initialState: PlanState = {
    loading: false,
    error: null,
    filteredPlans: [],
    namePlan: '',
    pricePlan: 0
}

export const PlanReducer = (state: PlanState, action: PlanActions) => {

    if(action.type === 'fetch-plans'){
        return {
            ...state,
            loading: true
        }
    }

    if(action.type === 'set-plans'){
        return {
            ...state,
            loading: false,
            filteredPlans: action.payload.data
        }
    }

    if(action.type === 'fetch-plans-error'){
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }
    }

    if(action.type === 'set-plan-selected'){
        return {
            ...state,
            namePlan: action.payload.name,
            pricePlan: action.payload.price,
            filteredPlans: []
        }
    }

    return state;
}