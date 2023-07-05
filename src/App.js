import { useContext, useEffect } from 'react';
import CountryContext from './context/index';

// components
import Loader from './components/Loader';
import CountryList from './components/CountryList';

function App() {
  const { isLoading, fetchCountries } = useContext(CountryContext);


  useEffect(() => {
    console.log(isLoading);
    setTimeout(() => {
			fetchCountries();
		}, 5000);
  },[]);

  return (
    <div className="App">
      { isLoading ?
        <Loader />
        :
        <div className="container">
					<CountryList />
				</div>
      }
    </div>
  );
}

export default App;
