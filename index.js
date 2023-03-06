import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Header from './modules/Header';
import Input from './modules/Input';
import Weather from './modules/Weather';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      temp: [],
      clouds: []
    };
  }

  getWeather = query => {
    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`)
      .then(response => {
        this.setState({
          weather: response.data.list[0],
          temp: response.data.list[0].main.temp,
          clouds: response.data.list[0].weather[0].description
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  queryWeather = (event, cityName) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      cityName = event.target.value;
      this.getWeather(cityName);
    }
  }

  render() {
    return (
      <div>
        <div className='content'>
          <Header />
          <Input queryWeather={this.queryWeather} />
        </div>
        <Weather
          city={this.state.weather.name}
          temp={this.state.temp}
          clouds={this.state.clouds} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
