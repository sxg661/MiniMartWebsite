export default async function callAPI(callback) {
    const res = await fetch("https://mini-mart-game-api-6b43b9b5a9f8.herokuapp.com/testAPI");
    const restext = await res.text()
    callback(restext);
}