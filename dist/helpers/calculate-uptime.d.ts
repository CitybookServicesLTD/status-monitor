import { DownPecentages } from "../interfaces";
/**
 * Get the status percentage for a website
 * @returns Percent string, e.g., 94.43%
 * @param slug - Slug of the site
 */
export declare const getstatusPercentForSite: (slug: string) => Promise<DownPecentages>;
