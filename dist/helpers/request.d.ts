import { CitybookServicesLTDConfig } from "../interfaces";
export declare const curl: (site: CitybookServicesLTDConfig["sites"][0]) => Promise<{
    httpCode: number;
    totalTime: number;
    data: string;
}>;
