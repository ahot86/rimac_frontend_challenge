import type { planType } from "../types/planTypes";

export const fetchPlans = async (): Promise<planType[]> => {
    try {
        const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json");
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        return data.list;        
    } catch (error) {
        throw new Error("No se pudo obtener los planes");
    }
};