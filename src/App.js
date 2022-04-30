import React from 'react';
import './App.css';
import Form from './Form.js';
import Weather from './Weather.js';

const API_key = "ffd0d15610acf2932fad9290799fa0a1"

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
    const api_url = await 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    const data = await api_url.json();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      wind: data.wind.speed,
      error: undefined
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      wind: undefined,
      error: "Wrong city, try again"
    })
  }
  }
  render(){ 
    return (
      <div className="App">
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
