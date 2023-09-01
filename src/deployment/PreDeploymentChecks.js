import data from '../config.json' assert  { type: "json" };

if(data.apiToUse.toLowerCase() != "deployed"){
    throw new Error("Api to use must be set to deployed, not local - make sure to push the change before retrying deployment");
}