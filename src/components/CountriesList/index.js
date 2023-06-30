import { useContext } from 'react';
import CountriesContext from '../../context/index';

const CountriesList = () => {
	const { countries } = useContext(CountriesContext);

	return(
		<div className="countries__list">
			{countries.map(item => (
				<div
					key={item.name.common}
					className="country"
				>
					<div className="country__flag">
						<img src={item.flags.png} alt={item.name.common} />
					</div>
					<div className="country__name">{item.name.common}</div>
				</div>
			))}
		</div>
	)
}

export default CountriesList;