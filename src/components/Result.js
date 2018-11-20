import React from 'react';
import Weather from './Weather';
import SunDetails from './SunDetails';

const Result = (props) => {
  const {sunrise, sunset } = props.data;
  return (
    <div className="result">
      {props.data.temperature
        ? <Weather 
            data={props.data} 
            detailsClass="weather-details-large" 
            iconClass="l-w-icon"
            tempClass="large-fonts">
              <SunDetails sunrise={sunrise} sunset={sunset} />
          </Weather>
        : <p className="error">{props.data.error || "Enter a city name"}</p>
      }
    </div>
  );
}

export default Result;