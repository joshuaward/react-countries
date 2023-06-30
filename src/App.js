import { useContext, useEffect } from 'react';
import CountriesContext from './context/index';

// components
import Loader from './components/Loader';
import CountriesList from './components/CountriesList';

function App() {
  const { isLoading, fetchCountries } = useContext(CountriesContext);


  useEffect(() => {
    console.log(isLoading);
    fetchCountries();
  },[]);

  return (
    <div className="App">
      { isLoading ?
        <Loader />
        :
        <CountriesList />
      }
    </div>
  );
}

export default App;
