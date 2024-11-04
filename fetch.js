const par = document.querySelector('p');
const endpoint = `https://raw.githubusercontent.com/Designoper/json/refs/heads/main/test.json`;

// const mainFunction = async (url) => {
// 	const DATA = await fetchAndParse(url);
// 	moreFunctions(DATA);
// }

const fetchAndParse = async (url) => {
	try {
		const RESPONSE = await fetch(url);
		par.insertAdjacentHTML("beforebegin",RESPONSE);
		// console.log(RESPONSE);
		const DATA = await RESPONSE.json();
		console.log(DATA);
		par.insertAdjacentHTML("beforeafter",DATA);
	}

	catch {
		const CONSOLE_MESSAGE = `fetchAndParse function has failed.`;
		throw (console.warn(CONSOLE_MESSAGE));
	}
}

fetchAndParse(endpoint);
