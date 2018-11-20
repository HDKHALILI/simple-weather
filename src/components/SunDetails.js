import React from 'react';

const formateDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours24 = date.getHours();
  let hours12 = hours24;
  const minutes = `0${date.getMinutes()}`.slice(-2);

  if(hours24 > 12) {
    hours12 = hours24 - 12;
  } else if (hours24 === 12 || hours24 === 0) {
    hours12 = 12
  } 

  return `${hours12}:${minutes}`
}

const SunDetails = (props) => {
  const sunrise = formateDate(props.sunrise);
  const sunset = formateDate(props.sunset);
  return (
    <div className="sun-details">
      <p><i className="wi wi-sunrise"></i>{sunrise} AM</p>
      <p><i className="wi wi-sunset"></i>{sunset} PM</p>
    </div>
  )
}

export default SunDetails;