import data from '../config.json';

if(data.apiToUse.toLowerCase() != "deployed"){
    throw new Error("Api to use must be set to deployed, not local");
}