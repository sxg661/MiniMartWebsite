import GetApiConfig from "./ApiConfig";

export default function GetApiUrl(callback) {
    var config = GetApiConfig();
    switch(config.apiToUse.toLowerCase()){
        case "local":
            return config.localApiUrl;
        case "deployed":
            return config.deployedApiUrl;
        default:
            throw new Error(`No url found for ${config.apiToUse}. Check your ApiConfig.js file.`);
    }
}