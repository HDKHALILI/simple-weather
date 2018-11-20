import React from 'react';

const Weather = (props) => {
  const { id, name, temperature, description} = props.data;
  return (
    <div className="weather">
      <i className={`${props.iconClass} wi wi-owm-${id}`}></i>
      <div className={props.detailsClass}>
        <p>{name}</p>
        <p className={props.tempClass}>{temperature}<i className="wi wi-celsius"></i></p>
        <p className="description">{description}</p>
      </div>
      {props.children}
    </div>
  )
}

export default Weather;