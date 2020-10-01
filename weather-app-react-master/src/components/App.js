import React from 'react';
import styled from 'styled-components';
import SearchCity from './SearchCity';
import device from '../responsive/Device';
import Result from './Result';
import NotFound from './NotFound';
import Navbar from './navbar'
import weatherHistory from './weatherHistory.css'





const AppTitle = styled.h1`
  display: block;
  height: 64px;
  margin: 0;
  padding: 20px 0;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};

  ${({ secondary }) =>
    secondary &&
    `
    opacity: 1;
    height: auto;
    position: relative;
    padding: 20px 0;
    font-size: 30px;
    top: 20%;
    text-align: center;
    transition: .5s;
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.laptop} {
      font-size: 50px;
    }
    @media ${device.laptopL} {
      font-size: 60px;
    }
    @media ${device.desktop} {
      font-size: 70px;
    }
    
  `}

  ${({ showResult }) =>
    showResult &&
    `
    opacity: 0;
    visibility: hidden;
    top: 10%;
  `}
`;

const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`;

class App extends React.Component {
  state = {
    value: '',
    weatherInfo: null,
    error: false,
    searchHistory: window.sessionStorage.searchHistory !== undefined ? JSON.parse(window.sessionStorage.searchHistory) : []
  };

  //getting the search history
  updateSearchHistory = historyItem => {
    let allHistory = this.state.searchHistory;     
    
    if(allHistory.length <= 4){
      allHistory.push(historyItem);
      this.setState ({searchHistory:allHistory});
      window.sessionStorage.searchHistory = JSON.stringify(this.state.searchHistory)

    }
    console.log("Length of histories:", allHistory.length);
  }
  getHistoryItem = query => {
    const history = {
      query : query,
      result : this.state.weatherInfo
    }
    return history;
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSearchCity = e => {
    e.preventDefault();
    const { value } = this.state;
    const APIkey = process.env.REACT_APP_API_KEY;

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
        //handling history
        const history = this.getHistoryItem(value);
        this.updateSearchHistory(history);
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };
 

  render() {
    
    const { value, weatherInfo, error, searchHistory } = this.state;
    return (
      <>
        <WeatherWrapper>
          <Navbar />
          
          <AppTitle secondary showResult={(weatherInfo || error) && true}></AppTitle>
          <SearchCity
            value={value}
            showResult={(weatherInfo || error) && true}
            change={this.handleInputChange}
            submit={this.handleSearchCity}
            updateSearchHistory = {this.updateSearchHistory}
          />
          <div className="weatherHistory">
            <h4 className="user-serhistor">User Search History</h4>
            {searchHistory.map(search => (<p className="list-cities">{search.query}</p>))}
          </div>
          {weatherInfo && <Result weather={weatherInfo} />}
          {error && <NotFound error={error} />}
        </WeatherWrapper> 
      </>
    );
  }
}
export default App;
