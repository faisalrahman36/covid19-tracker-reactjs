import React, {useEffect,useState} from 'react';
import './Header.css';
import Countries from './CountryPicker';
import Chart from './Chart'
import { fetchData } from './datafetch';



function RegionalData() {

  const defaultcountry={country:'none'};
  const defaultdata = {confirmed:0, recovered:0, deaths:0};  
  const [countryval, setcountry] = useState(defaultcountry);
    const [dataval,setdata]= useState(defaultdata);
    //useEffect(() => {
   /*
    async function handleCountryChangeval(country) {
        const data = await fetchData(country);
    
        setcountry(country);
        setdata(data);
      }
    */


 let handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setcountry(country);
    setdata(data);
}
      //handleCountryChangeval(country);
  
    //},[])
      
    
  return (<div >
  <Countries handleCountryChange={e.handleCountryChange} />
  <Chart data={dataval} country={countryval} /> 
        </div>
  );
}
 
export default RegionalData;