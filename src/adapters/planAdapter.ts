import type { planType } from "../types/planTypes";

export const filterPlansByAge = (data: planType[], age: number):planType[] => {
    return data.filter(plan => plan.age > age);
};