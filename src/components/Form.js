import React from 'react';

const Form = (props) => (
  <div>
    <form onSubmit={props.getWeather} className="input">
      <input type="text" name="location" placeholder="Sydney" />
      <button className="button" type="submit">Get Weather</button>
    </form>
  </div>
);

export default Form;