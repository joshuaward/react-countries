import { useState } from 'react';

import './countryItem.scss';

import Modal from '../Modal/index';

const CountryItem = ({ item }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState({});

	const showCountryModal = (country) => {
		console.log(country);
		setModalOpen(true);
		setModalData({
			name: country.name.common,
			capital: country.capital[0]
		});
	}

	const hideCountryModal = () => {
		setModalOpen(false);
	}

	return(
		<>
			<div
				onClick={() => showCountryModal(item)}
				className="country"
			>
				<div className="country__flag">
					<img src={item.flags.png} alt={item.name.common} />
				</div>
				{/* <div className="country__name">{item.name.common}</div> */}
			</div>
			{modalOpen ? 
				<Modal onClose={hideCountryModal} modalOpen={modalOpen}>
					<div className="modal__section">
						<div className="country__flag">
							<img src={item.flags.png} alt={item.name.common} />
						</div>
						<div className="country__name">{modalData.name}</div>
						{item.capital[0] && 
							<div>
								<span>Capital: </span>
								<span>{modalData.capital}</span>
							</div>
						}
					</div>
					<div className="modal__section">
						<iframe src="https://goo.gl/maps/4VsHsc2oeGeRL3wg6"></iframe>
					</div>
				</Modal>
				:
				null
			}
		</>
	)
}

export default CountryItem;