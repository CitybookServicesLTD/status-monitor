import { readFile } from "fs-extra";
import { load } from "js-yaml";
import { join } from "path";
import { CitybookServicesLTDConfig } from "../interfaces";

let __config: CitybookServicesLTDConfig | undefined = undefined;
export const getConfig = async (): Promise<CitybookServicesLTDConfig> => {
  if (__config) return __config;
  const config = load(await readFile(join(".", ".CitybookServicesLTDrc.yml"), "utf8")) as CitybookServicesLTDConfig;
  __config = config;
  return config;
};
