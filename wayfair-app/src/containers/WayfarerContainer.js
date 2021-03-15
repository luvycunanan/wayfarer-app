import React, { Component } from 'react';
import CitiesList from '../components/CitiesList';
import CityPage from '../pages/CityPage';
import NavbarWayfarer from '../components/NavbarWayfarer';
// import PostsList from '../components/PostsList'

const URL = 'http://localhost:4000/api/cities';

class WayfarerContainer extends Component {
  state = {
    cities: [],
    city: 0,
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  }

  updateCity = (index) => {
    this.setState({
      city: index,
    });
  };

  handleChange = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    fetch(`http://localhost:4000/api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => console.log(response))
      .then((jsonData) => {
        console.log(jsonData);
        this.handleChange();
      });
  };

  render() {
    return (
      <div>
        <div className='container wayfarerContainer'>
          <NavbarWayfarer />
          <div className='row' id='wayfarerContainer'>
            <h2>Cities</h2>
            <div id='wayfarerLeft' className='col-4'>
              <CitiesList
                cities={this.state.cities}
                updateCity={this.updateCity}
              />
            </div>
            <div id='wayfarerRight' className='col-8'>
              <CityPage
                city={this.state.cities[this.state.city]}
                deletePost={this.handleDelete}
                update={this.handleChange}
              />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default WayfarerContainer;
