// services/userService.ts (Infraestructura)
import type { userData } from "../types/userTypes";
import { calculateAge } from "../utilities/calculateAge";

interface ApiUserResponse {
  name: string;
  lastName: string;
  birthDay: string;
}

export const UserService = {
  async fetchUserData(): Promise<userData> {
    try {
      const response = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/user.json"
      );
      
      if (!response.ok) throw new Error("Error fetching user data");
      
      const data: ApiUserResponse = await response.json();
      
      return {
        name: data.name,
        lastName: data.lastName,
        birthDate: data.birthDay,
        yearsold: calculateAge(data.birthDay),
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Error desconocido"
      );
    }
  },
};