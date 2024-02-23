"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldContinue = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const secrets_1 = require("./secrets");
const shouldContinue = async () => {
    const [owner, repo] = secrets_1.getOwnerRepo();
    if (`${owner}/${repo}` === "CitybookServicesLTD/status")
        return true;
    try {
        const CitybookServicesLTDDefaultConfig = await axios_1.default.get("https://raw.githubusercontent.com/CitybookServicesLTD/status/HEAD/.CitybookServicesLTDrc.yml");
        const thisRepoConfig = await fs_extra_1.readFile(path_1.join(".", ".CitybookServicesLTDrc.yml"), "utf8");
        if (CitybookServicesLTDDefaultConfig.data.trim() === thisRepoConfig.trim()) {
            console.log(`

[warn] > CitybookServicesLTD WARNING
[warn] > You should change your CitybookServicesLTD configuration (.CitybookServicesLTDrc.yml)
[warn] > CitybookServicesLTD workflows will NOT work until you've added custom configuration

`);
            return false;
        }
    }
    catch (error) { }
    return true;
};
exports.shouldContinue = shouldContinue;
//# sourceMappingURL=init-check.js.map