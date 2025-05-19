import type { loginData, userData } from "./userTypes";
import type { planType } from "./planTypes";

export type userSummaryData = loginData & Pick<userData, "name" | "lastName"> & Pick<planType, "name" | "price">