import React, { Component } from 'react';

import { getWeather } from './utils/api';
import Form from './components/Form';
import Result from './components/Result';
import Weather from './components/Weather';

class App extends Component {

  state = {
    singleCity: {
      temperature: '',
      id: '',
      name: '',
      sunrise: '',
      sunset: '',
      description: '',
      error: undefined
    },
    multipleCities: [
    ]
  }

  componentDidMount() {
    const cities = ['London', 'Sydney', 'New York'];
    cities.map((city) => {
      return getWeather(city)
        .then((data) => {
          this.setState((prevState) => {
            return {
              multipleCities: prevState.multipleCities.concat({
                temperature: data.main.temp,
                id: data.weather[0].id,
                name: data.name
              })
            }
          })
        })
    })
  }

  handleGetWeather = (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value.trim();
    console.log(location);

    if (location) {
      getWeather(location)
        .then((data) => {
          this.setState(() => {
            console.log(data)
            return {
              singleCity: {
                temperature: data.main.temp,
                id: data.weather[0].id,
                name: data.name,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                description: data.weather[0].description
              }
            }
          })
        })
        .catch((error) => this.setState(() => ( { singleCity: {error: "Please enter a valid city name"} } )));
    } 

    event.target.elements.location.value = '';
  }
  render() {
    return (
      <div className="container">
        <Form getWeather={this.handleGetWeather} />
        <Result data={this.state.singleCity} />
        <div className="default-cities">
          {
            this.state.multipleCities.map((city) =>
              <Weather 
                key={city.name} 
                detailsClass="details-medium" 
                iconClass="icon-medium" 
                data={city}
                tempClass="medium-font"/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
