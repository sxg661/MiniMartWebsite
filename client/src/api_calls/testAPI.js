export default async function callAPI(callback) {
    const res = await fetch("http://localhost:9000/testAPI");
    const restext = await res.text()
    callback(restext);
}