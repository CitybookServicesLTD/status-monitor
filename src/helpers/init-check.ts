import axios from "axios";
import { readFile } from "fs-extra";
import { join } from "path";
import { getOwnerRepo } from "./secrets";

export const shouldContinue = async (): Promise<boolean> => {
  const [owner, repo] = getOwnerRepo();
  if (`${owner}/${repo}` === "CitybookServicesLTD/status") return true;
  try {
    const CitybookServicesLTDDefaultConfig = await axios.get(
      "https://raw.githubusercontent.com/CitybookServicesLTD/status/HEAD/.CitybookServicesLTDrc.yml"
    );
    const thisRepoConfig = await readFile(join(".", ".CitybookServicesLTDrc.yml"), "utf8");
    if (CitybookServicesLTDDefaultConfig.data.trim() === thisRepoConfig.trim()) {
      console.log(`

[warn] > CitybookServicesLTD WARNING
[warn] > You should change your CitybookServicesLTD configuration (.CitybookServicesLTDrc.yml)
[warn] > CitybookServicesLTD workflows will NOT work until you've added custom configuration

`);
      return false;
    }
  } catch (error) {}
  return true;
};
