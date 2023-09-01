import data from '../config.json';

export default function GetApiUrl(callback) {
    switch(data.apiToUse.toLowerCase()){
        case "local":
            return data.localApiUrl;
        case "deployed":
            return data.deployedApiUrl;
        default:
            return "Unknown";
    }
}