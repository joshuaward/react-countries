import { useState } from 'react';

import './countryItem.scss';

import Modal from '../Modal/index';

const CountryItem = ({ item }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const showCountryModal = (country) => {
		console.log(country);
		setModalOpen(true);
	}

	const hideCountryModal = () => {
		setModalOpen(false);
	}

	const numberWithCommas = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
					<div className="modal__sections">
						<div className="modal__section">
							<h2 className="country__modal-name">{item.name.common}</h2>
							{item.capital[0] && 
								<div className="country__modal-data">
									<span className="country__modal-data-label">Capital: </span>
									<span>{item.capital[0]}</span>
								</div>
							}
							{item.population && 
								<div className="country__modal-data">
									<span className="country__modal-data-label">Population: </span>
									<span>{numberWithCommas(item.population)}</span>
								</div>
							}
							{item.latlng && 
								<div className="country__modal-data">
									<span className="country__modal-data-label">Latitude/Longitude: </span>
									<span>{item.latlng[0]}, {item.latlng[1]}</span>
								</div>
							}
							{item.region && 
								<div className="country__modal-data">
									<span className="country__modal-data-label">Region: </span>
									<span>{item.region}</span>
								</div>
							}
							{item.subregion && 
								<div className="country__modal-data">
									<span className="country__modal-data-label">Subregion: </span>
									<span>{item.subregion}</span>
								</div>
							}
						</div>
						<div className="modal__section">
							<div className="country__modal-flag">
								{item.unMember && <span className="circle circle--un"></span>}
								{item.independent && <span className="circle circle--independent"></span>}
								<img src={item.flags.png} alt={item.name.common} />
							</div>
						</div>
					</div>
				</Modal>
				:
				null
			}
		</>
	)
}

export default CountryItem;