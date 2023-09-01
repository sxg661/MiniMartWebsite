import GetApiUrl from './ApiHelper';

export default async function callAPI(callback) {
    var url = GetApiUrl() + "/testAPI";
    const res = await fetch(url);
    const restext = await res.text()
    callback(restext);
}