import { createContext, useState } from 'react';
import axios from 'axios';

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
	const endpoint = 'https://restcountries.com/v3.1/all?fields=name,flag,flags,capital,maps,region,population,';
	const [isLoading, setIsLoading] = useState(true);
	const [countries, setCountries] = useState([]);

	const fetchCountries = async () => {
		const response = await axios.get(endpoint);
		console.log(response.data);
		setTimeout(() => {
			setCountries(response.data);
			setIsLoading(false);
		}, 3000);
	}

	const values = {
		isLoading,
		fetchCountries,
		countries
	}

	return(
		<CountriesContext.Provider value={ values }>
			{ children }
		</CountriesContext.Provider>
	);
}

export { CountriesProvider };
export default CountriesContext;