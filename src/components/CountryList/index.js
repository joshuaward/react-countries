import { useContext } from 'react';
import CountryContext from '../../context/index';
import './countryList.scss';

import CountryItem from '../CountryItem/index';

const CountryList = () => {
	const { countries } = useContext(CountryContext);

	return(
		<div className="countries__list">
			{countries.map(item => (
				<CountryItem key={item.name.common} item={item} />
			))}
		</div>
	)
}

export default CountryList;