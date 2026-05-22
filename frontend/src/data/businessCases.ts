import businessCasePayload from "../../../data/data.json";
import type { BusinessCaseResponse } from "../../../backend/src/types";

export const businessCases = (businessCasePayload as BusinessCaseResponse).data;
