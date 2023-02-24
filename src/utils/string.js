const baseUrl = `https://swapi.dev/api/`;
const returnPath = (str) => str.replace(baseUrl, "").split(`/`);
const returnId = (str) => returnPath(str)[1];

export { returnId, returnPath };
